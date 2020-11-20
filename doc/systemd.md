# Systemd

Here are common useful commands :

## Services (systemctl)

    systemctl reload apache2
    systemctl start apache2
    systemctl status apache2
    systemctl stop apache2
    
## Logs (journalctl)

Read entries from a specific unit

    journalctl -u apache.service

Read entries since boot

    journalctl --boot

Monitor the journal

    journalctl -f
    journalctl -u apache.service -f
    
## Power management

    systemctl reboot
    systemctl halt
    systemctl hibernate
    systemctl emergency  # Put in emergency mode
    systemctl default    # Exit emergency mode
