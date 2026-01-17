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
        venv: "env",
        message: [
          "python -m pip install --upgrade pip",
          "pip install -r app/requirements_mlx.txt"
        ]
      }
    }
  ]
}
