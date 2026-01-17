module.exports = {
  version: "4.0",
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
      when: "{{exists('app')}}",
      method: "shell.run",
      params: {
        venv: "env",
        message: "pip install -r app/requirements_mlx.txt"
      }
    }
  ]
}
