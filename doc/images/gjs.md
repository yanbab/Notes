# Native GTK3/GNOME apps in Javascript (Gjs)


### Resources



## Code Samples

### Hello World Window

Create a new file `<file>`, run it with `gjs <file>`

    conts { Gtk } = imports.gi
    Gtk.init()
    let win = new Gtk.Window()
    let label = new Gtk.Label()
    win.add(label)
    win.show_all()

### Hello World Application

It's best pratice to use a Gtk.Application to manage windows, as it does all sort of useful things under the wood.

    #!/usr/bin/gjs
    
    const { Gtk } = imports.gi

    let win = null
    let app = new Gtk.Application()
    app.connect('activate', () => {
        win = new Gtk.Window()
        let label = new Gtk.Label()
        window.add(label)
        window.show_all
    })
    app.run()

### Hello World WebKit

A web browser in 7 lines of code !
You may need to install WebKit2 GObject instrospection for it to work (`sudo apt install git1.2-webkit2-4.0` or similar under Debian/Ubuntu)

    const { Gtk, WebKit2 } = imports.gi
    
    Gtk.init()
    
    let win = new Gtk.Window()
    let webview = new WebKit2.WebView()
    webview.load_uri('http://gnome.org')
    win.add(webview)
    win.show_all()

### Subclassing widgets

You need to register inherited classes with a special syntax

    Gtk.init()

### Import local modules

There is no clean way to get local path so we'll use a hacky `cwd()` function to add it to imports search paths.
Note that if you build a proper project with Gnome-Builder this is all managed for you.

    function cwd() {

    }
    
