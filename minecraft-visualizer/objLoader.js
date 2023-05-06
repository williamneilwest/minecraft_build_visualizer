import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import scene from "three/addons/offscreen/scene.js";


// instantiate a loader
const loader = new OBJLoader();

// load a resource
loader.load(
    // resource URL
    'https://github.com/williamneilwest/3dexample/blob/main/House_0.obj',
    // called when resource is loaded
    function ( object ) {

        scene.add( object );


    },
    // called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);




