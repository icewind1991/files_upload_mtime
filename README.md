# Preserve upload mtime

Preserve the modified date of files uploaded trough the web interface.

This reverts the change in behavior when uploading files trough the webinterface made in Nextcloud 12.

With the app enabled any file uploaded trough the webinterface will maintain it's original modified date instead of settings the modified date to the time of upload.
