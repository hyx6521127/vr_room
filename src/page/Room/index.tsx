import React, { SFC, useEffect, useRef } from "react"
import * as THREE from "three"
// import { OrbitControls } from "three-orbitcontrols-ts"
import OrbitControls from "../../Orbitcontrols";
// import roomImage from "../../assets/room.webp"
import room0 from '../../assets/512_face0_0_0.jpg'
import room1 from '../../assets/512_face1_0_0.jpg'
import room2 from '../../assets/512_face2_0_0.jpg'
import room3 from '../../assets/512_face3_0_0.jpg'
import room4 from '../../assets/512_face4_0_0.jpg'
import room5 from '../../assets/512_face5_0_0.jpg'
import newroom0 from '../../assets/513_face0_0_0.jpg'
import newroom1 from '../../assets/513_face1_0_0.jpg'
import newroom2 from '../../assets/513_face2_0_0.jpg'
import newroom3 from '../../assets/513_face3_0_0.jpg'
import newroom4 from '../../assets/513_face4_0_0.jpg'
import newroom5 from '../../assets/513_face5_0_0.jpg'

import styles from "./index.scss"

type Prop = {}

const Room: SFC<Prop> = (props) => {
  let camera = useRef<THREE.Camera>()
  let sceneRef = useRef<THREE.Scene>()
  useEffect(() => {
    init()
  }, [])

  function init() {
    const room = document.getElementById("room")
    if (room) {
      const width = room.clientWidth
      const height = room.clientHeight
      console.log(width, height)
      const renderer = new THREE.WebGLRenderer()
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)
      // renderer.setClearColor(new THREE.Color(0xffffff))

      room && room.appendChild(renderer.domElement)

      // 场景
      const scene = sceneRef.current = new THREE.Scene()
      // 相机
      camera.current = new THREE.PerspectiveCamera(
        90,
        width / height,
        0.1,
        100
      )
      camera.current.position.set(0, 0, 0)
      // camera.lookAt(0,0,0)

      // 轨道控制器
      const controls = new OrbitControls(camera.current, renderer.domElement)
      controls.addEventListener("change", () => {camera.current && render(renderer, scene, camera.current)})
      controls.minDistance = 1
      controls.maxDistance = 200
      controls.enablePan = false

      // 新增一个红色球
      // const geometry = new THREE.SphereGeometry(1, 10, 10);
      // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      // const mesh = new THREE.Mesh(geometry, material);
      // scene.add(mesh);
      // const texture = THREE.ImageUtils.loadTexture(roomImage)
      // const material = new THREE.MeshBasicMaterial({ map: texture })
      // material.side = THREE.DoubleSide
      // const geometry = new THREE.SphereGeometry(50, 256, 256)
      // const mesh = new THREE.Mesh(geometry, material)
      // scene.add(mesh)
      const MeshBasic0 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(room2),}) //  x前
      const MeshBasic1 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(room4),}) // x后
      const MeshBasic2 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(room0),}) // y上
      const MeshBasic3 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(room5),}) //  y下
      const MeshBasic4 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(room1),}) //  z前
      const MeshBasic5 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(room3),}) // z后
      MeshBasic0.side = THREE.DoubleSide
      MeshBasic1.side = THREE.DoubleSide
      MeshBasic2.side = THREE.DoubleSide
      MeshBasic3.side = THREE.DoubleSide
      MeshBasic4.side = THREE.DoubleSide
      MeshBasic5.side = THREE.DoubleSide
      const materials = []
      materials.push(MeshBasic0)
      materials.push(MeshBasic1)
      materials.push(MeshBasic2)
      materials.push(MeshBasic3)
      materials.push(MeshBasic4)
      materials.push(MeshBasic5)
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(100,100,100), materials)
      scene.add(mesh)
      const NewMeshBasic0 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(newroom2),}) //  x前
      const NewMeshBasic1 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(newroom4),}) // x后
      const NewMeshBasic2 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(newroom0),}) // y上
      const NewMeshBasic3 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(newroom5),}) //  y下
      const NewMeshBasic4 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(newroom1),}) //  z前
      const NewMeshBasic5 = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture(newroom3),}) // z后
      NewMeshBasic0.side = THREE.DoubleSide
      NewMeshBasic1.side = THREE.DoubleSide
      NewMeshBasic2.side = THREE.DoubleSide
      NewMeshBasic3.side = THREE.DoubleSide
      NewMeshBasic4.side = THREE.DoubleSide
      NewMeshBasic5.side = THREE.DoubleSide
      const newmaterials = []
      newmaterials.push(NewMeshBasic0)
      newmaterials.push(NewMeshBasic1)
      newmaterials.push(NewMeshBasic2)
      newmaterials.push(NewMeshBasic3)
      newmaterials.push(NewMeshBasic4)
      newmaterials.push(NewMeshBasic5)
      const newmesh = new THREE.Mesh(new THREE.BoxGeometry(100,100,100), newmaterials)
      newmesh.position.set(100.1,0,0)
      scene.add(newmesh)
      // 坐标轴辅助线
      scene.add(new THREE.AxesHelper(1000))

      // controls.update() // 控制器需要
      // controls.target.copy(mesh.position)
      r(renderer, scene, camera.current)
      render(renderer, scene, camera.current)
      
    }

    function render(renderer:THREE.Renderer, scene: THREE.Scene, camera: THREE.Camera) {
      renderer.render(scene, camera)
    }

    function r(renderer:THREE.Renderer, scene: THREE.Scene, camera: THREE.Camera) {
      render(renderer, scene, camera)
      requestAnimationFrame(() => r(renderer, scene, camera))
    }
    
  }

  function change() {
    // camera.current && camera.current.position.set(100.1,0,0)
    sceneRef.current && sceneRef.current.position.set(-100.1,0,0)
  }

  return <div  className={styles.room}>
    <div id="room"></div>
    <button onClick={change}>确定</button>
  </div>
}

export default Room
