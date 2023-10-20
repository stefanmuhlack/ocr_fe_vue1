uploadPDF() {
if (!this.selectedFile) {
console.error("No file selected");
return;
}

const formData = new FormData();
formData.append("pdf", this.selectedFile);

this.$axios.post("/pdf/upload/", formData)
.then(response => {
console.log("File uploaded successfully:", response.data);
})
.catch(error => {
console.error("File upload failed:", error);
});
}
