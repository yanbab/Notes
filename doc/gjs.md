# Native GTK3/GNOME apps in Javascript (Gjs)



## Resources

- [Gjs Guides](https://gjs.guide/)
- [Gnome Developer : Tutorials, code samples and platform demos in JavaScript](https://developer.gnome.org/gnome-devel-demos/stable/js.html.en)
- [GNOME JavaScript Docs](https://gjs-docs.gnome.org/)

## Code Samples

### Hello World Window

Create a new file `hello.js`, run it with `gjs hello.js`

    conts { Gtk } = imports.gi
    Gtk.init()
    let win = new Gtk.Window()
    let label = new Gtk.Label()
    win.add(label)
    win.show_all()

### Hello World Application

Using Gtk.Application encompasses many repetitive tasks that a modern application needs such as handling multiple instances, D-Bus activation, opening files, command line parsing, startup/shutdown, menu management, window management, and more.

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
    app.run(ARGV)

### Hello World WebKit

A web browser in 7 lines of code !

You may need to install WebKit2 GObject instrospection support for it to work (`sudo apt install git1.2-webkit2-4.0` or similar under Debian/Ubuntu)

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

There is no clean way to get local path if your app is not packaged, so we'll use a hacky `cwd()` function to add it to imports search paths.

    function cwd() {
        return path
    }

    imports.push(cwd()) // Add to imports search paths

    // Now you can import local modules,
    // let's say you have a `my_module.js` file
    // (or `my_module/index.js`) :

    const Module = imports.my_module 


