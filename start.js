module.exports = {
  version: "4.0",
  daemon: true,
  run: [
    {
      when: "{{exists('app/.git')}}",
      method: "shell.run",
      params: {
        path: "app",
        message: "git pull"
      }
    },
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: "git clone https://github.com/CharafChnioune/SongGeneration-Studio-MLX.git app"
      }
    },
    {
      when: "{{!exists('env/.sg_installed')}}",
      method: "shell.run",
      params: {
        path: "app",
        venv: "../env",
        message: [
          "python -m pip install --upgrade pip",
          "pip install -r requirements.txt",
          "python -c \"from pathlib import Path; Path('../env/.sg_installed').touch()\""
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
      method: "local.set",
      params: {
        port: "{{port}}",
        url: "{{'http://127.0.0.1:' + port}}"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "../env",
        message: "python main.py --host 127.0.0.1 --port {{local.port}}",
        on: [
          {
            event: "/http:\\/\\/127\\.0\\.0\\.1:\\d+/",
            done: true
          }
        ]
      }
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event ? input.event[0] : local.url}}"
      }
    },
    {
      method: "log",
      params: {
        raw: "SongGeneration Studio running at {{local.url}}"
      }
    }
  ]
}
