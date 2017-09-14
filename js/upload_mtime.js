$(function () {
	var originalSubmit = OC.FileUpload.prototype.submit;

	OC.FileUpload.prototype.submit = function () {
		if (!this.data.headers) {
			this.data.headers = {};
		}
		var file = this.getFile();

		if (file.lastModified) {
			// preserve timestamp
			this.data.headers['X-OC-Mtime'] = (file.lastModified / 1000).toFixed(0);
		}

		originalSubmit.call(this);
	}
});
