
const { Gio, Gtk } = imports.gi

const apps = {
  running() {
    return [
      { id: "org.gimp.GIMP", name: "GIMP" },
      { id: "org.gnome.Terminal", name: "Terminal" },
    ]
  }
  icon(app_id) {

  }
  kill(app_process, cb) {
    spawn("killall " + app_process)
    cb(true)
  }
}

function spawn(cmd, cb) {

}


function createWindow() {
  let win = new Gtk.Window()
  let title = new Gtk.HeaderBar()
  let button_kill = new Gtk.button()
  title.add(button_kill)
  button_kill.connect('click', on_kill)
  let list = new List()
  list.connect('changed', (selected) => {
    button_kill.set_sensitive(selected)
  })
  for (const app in apps.running()) {
    list.insert([ apps.icon(app.id), app.name ])
  }
  win.add(list)
  return win
}

function activate() {
  win = createWindow()
  win.show_all()
}

activate()