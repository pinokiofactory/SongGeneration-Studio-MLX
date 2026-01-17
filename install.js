module.exports = {
  version: "4.0",
  run: [
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: "git clone https://github.com/CharafChnioune/SongGeneration-Studio-MLX.git app"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "../env",
        message: [
          "python -m pip install --upgrade pip",
          "pip install -r requirements.txt"
        ]
      }
    },
    {
      when: "{{!exists('app/ckpt/vae/autoencoder_music_1320k.npz')}}",
      method: "shell.run",
      params: {
        path: "app",
        venv: "../env",
        message: "python tools/fetch_runtime.py --local-dir ."
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "../env",
        message: "python -c \"from pathlib import Path; Path('../env/.sg_installed').touch()\""
      }
    }
  ]
}
