# SongGeneration Studio MLX (Pinokio Launcher)

This repository contains the Pinokio launcher scripts for **SongGeneration Studio MLX**.
It installs the main app repo, sets up the Python environment, and starts the web UI.

## What this installs

- App repository: `https://github.com/CharafChnioune/SongGeneration-Studio-MLX`
- Python dependencies from `requirements_mlx.txt`
- MLX model downloads happen automatically at first run inside the app.

## Pinokio usage

1. Add this repo to Pinokio (Discover → Download from URL).
2. Click **Install** (creates `env` + installs deps).
3. Click **Start** (launches the web UI on a free port).
4. Use **Update** to pull latest app changes.
5. Use **Factory Reset** to remove the `env` and reinstall.

## Notes

- The launcher keeps the app in an `app/` folder next to the scripts.
- Model weights are downloaded on demand by the app from Hugging Face.

## Links

- App repo: https://github.com/CharafChnioune/SongGeneration-Studio-MLX
- Models: https://huggingface.co/AITRADER/SongGeneration-Large-MLX
