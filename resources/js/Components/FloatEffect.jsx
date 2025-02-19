import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function SlightMovement3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    // 1. Cena, câmera e renderer básicos
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 50)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    mountRef.current.appendChild(renderer.domElement)

    // 2. Luzes
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
    scene.add(ambientLight)

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8)
    dirLight1.position.set(10, 10, 10)
    scene.add(dirLight1)


    // 3. Carregar o modelo .glb
    const loader = new GLTFLoader()
    loader.load(
      '/floatingshapes8.glb',
      (gltf) => {
        const model = gltf.scene
        scene.add(model)

        model.scale.set(0.3, 0.3, 0.3)

        // Para cada mesh, salvamos a posição inicial e um 'offset' aleatório
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.userData.initialPosition = child.position.clone()
            child.userData.offset = Math.random() * 100
          }
        })

        // 4. Loop de animação para mover levemente os objetos
        const clock = new THREE.Clock()
        function animate() {
          requestAnimationFrame(animate)
          const t = clock.getElapsedTime()

          // Para cada peça (mesh), faz um pequeno deslocamento em Y
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.position.y =
                child.userData.initialPosition.y + 1.1 * Math.sin(t + child.userData.offset)
            }
          })

          renderer.render(scene, camera)
        }
        animate()
      },
      undefined,
      (error) => {
        console.error('Erro ao carregar modelo:', error)
      }
    )

    // Responsividade
    function handleResize() {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Limpeza ao desmontar
    return () => {
      window.removeEventListener('resize', handleResize)
      container.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  // 5. Container para o canvas
  return (
    <div
    ref={mountRef}
    style={{ 
      width: '100%', 
      height: '100%', 
      position: 'absolute',
      top: 0,
      left: 0,
      overflow: 'hidden'
    }}
  />
  )
}
