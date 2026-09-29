Replace this file with a production house model exported from Blender, Revit, or SketchUp.

Recommended pipeline:
- GLB / GLTF container
- Draco geometry compression
- Meshopt for runtime decoding
- KTX2 / Basis textures for GPU-friendly maps

The app loads this path when HOUSE_SOURCE is set to "glb" in src/data/houseSource.js.
