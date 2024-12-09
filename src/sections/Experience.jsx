import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";

const Experience = () => {
    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">Experience</h3>
                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, -10]} intensity={1} />
                            <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position={[0, -1.5, 0]} scale={1.5} />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({id, name, pos, duration, title, icon}) =>
                                (
                                    <div key={id} className="work-content_container group">
                                        <div className="flex flex-col h-full justify-start items-center py-2">
                                            <div className="work-logo">
                                                <img src={icon} alt="logo" className="w-20 h-20"/>
                                            </div>
                                            <div className="work-content_bar">
                                            </div>
                                            <div className="sm:p-5 px-2.5 py-5">
                                                <p className="font-bold text-white-800">
                                                    {name}
                                                </p>

                                                <p className="text-sm mb-5">
                                                    {duration}
                                                </p>

                                                <p className="group-hover:text-white transition ease-in-out duration-500">
                                                    {pos}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience
