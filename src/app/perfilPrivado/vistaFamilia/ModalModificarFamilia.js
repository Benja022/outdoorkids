import React from "react";
import style from "./modalModificarFamilia.module.css";
import formStyle from "./formularioFamilia.module.css";
import Image from "next/image";
import classNames from "classnames";

const ModificarFamilia = ({
  isOpen,
  onClose,
  newMember,
  handleNewMemberChange,
  handleAddMember,
  familyPhoto,
  handlePhotoChange,
  handleNickname,
  nickname,
}) => {
  if (!isOpen) return null;

  /* 
  CODIGO PARA EL DRAG AND DROG DE LA IMAGEN

  var isAdvancedUpload = function() {
  var div = document.createElement('div');
  return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
}();

let draggableFileArea = document.querySelector(".drag-file-area");
let browseFileText = document.querySelector(".browse-files");
let uploadIcon = document.querySelector(".upload-icon");
let dragDropText = document.querySelector(".dynamic-message");
let fileInput = document.querySelector(".default-file-input");
let cannotUploadMessage = document.querySelector(".cannot-upload-message");
let cancelAlertButton = document.querySelector(".cancel-alert-button");
let uploadedFile = document.querySelector(".file-block");
let fileName = document.querySelector(".file-name");
let fileSize = document.querySelector(".file-size");
let progressBar = document.querySelector(".progress-bar");
let removeFileButton = document.querySelector(".remove-file-icon");
let uploadButton = document.querySelector(".upload-button");
let fileFlag = 0;

fileInput.addEventListener("click", () => {
	fileInput.value = '';
	console.log(fileInput.value);
});

fileInput.addEventListener("change", e => {
	console.log(" > " + fileInput.value)
	uploadIcon.innerHTML = 'check_circle';
	dragDropText.innerHTML = 'File Dropped Successfully!';
	document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
	uploadButton.innerHTML = `Upload`;
	fileName.innerHTML = fileInput.files[0].name;
	fileSize.innerHTML = (fileInput.files[0].size/1024).toFixed(1) + " KB";
	uploadedFile.style.cssText = "display: flex;";
	progressBar.style.width = 0;
	fileFlag = 0;
});

uploadButton.addEventListener("click", () => {
	let isFileUploaded = fileInput.value;
	if(isFileUploaded != '') {
		if (fileFlag == 0) {
    		fileFlag = 1;
    		var width = 0;
    		var id = setInterval(frame, 50);
    		function frame() {
      			if (width >= 390) {
        			clearInterval(id);
					uploadButton.innerHTML = `<span class="material-icons-outlined upload-button-icon"> check_circle </span> Uploaded`;
      			} else {
        			width += 5;
        			progressBar.style.width = width + "px";
      			}
    		}
  		}
	} else {
		cannotUploadMessage.style.cssText = "display: flex; animation: fadeIn linear 1.5s;";
	}
});

cancelAlertButton.addEventListener("click", () => {
	cannotUploadMessage.style.cssText = "display: none;";
});

if(isAdvancedUpload) {
	["drag", "dragstart", "dragend", "dragover", "dragenter", "dragleave", "drop"].forEach( evt => 
		draggableFileArea.addEventListener(evt, e => {
			e.preventDefault();
			e.stopPropagation();
		})
	);

	["dragover", "dragenter"].forEach( evt => {
		draggableFileArea.addEventListener(evt, e => {
			e.preventDefault();
			e.stopPropagation();
			uploadIcon.innerHTML = 'file_download';
			dragDropText.innerHTML = 'Drop your file here!';
		});
	});

	draggableFileArea.addEventListener("drop", e => {
		uploadIcon.innerHTML = 'check_circle';
		dragDropText.innerHTML = 'File Dropped Successfully!';
		document.querySelector(".label").innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
		uploadButton.innerHTML = `Upload`;
		
		let files = e.dataTransfer.files;
		fileInput.files = files;
		console.log(files[0].name + " " + files[0].size);
		console.log(document.querySelector(".default-file-input").value);
		fileName.innerHTML = files[0].name;
		fileSize.innerHTML = (files[0].size/1024).toFixed(1) + " KB";
		uploadedFile.style.cssText = "display: flex;";
		progressBar.style.width = 0;
		fileFlag = 0;
	});
}

removeFileButton.addEventListener("click", () => {
	uploadedFile.style.cssText = "display: none;";
	fileInput.value = '';
	uploadIcon.innerHTML = 'file_upload';
	dragDropText.innerHTML = 'Drag & drop any file here';
	document.querySelector(".label").innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
	uploadButton.innerHTML = `Upload`;
});
  */

  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <div className={formStyle.familyPhoto}>
          {familyPhoto ? (
            <Image
              className={classNames(formStyle.familyPhotoInput, style.img)}
              src={familyPhoto}
              alt="Imagen de la familia"
              width={50}
              height={50}
              //layout="responsive"
            />
          ) : (
            <Image
              className={classNames(formStyle.familyPhotoInput, style.img)}
              src="/images/estrella.png"
              alt="Imagen de la familia"
              width={50}
              height={50}
              //layout="responsive"
            />
          )}
          <div className={style.inputPhoto}>
            <link
              href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined"
              rel="stylesheet"
            />
            <form className={style.formcontainer} enctype="multipart/form-data">
              <div className={style.uploadFilesContainer}>
                <div class="drag-file-area">
                  <span class="material-icons-outlined upload-icon">
                    {" "}
                    file_upload{" "}
                  </span>
                  <h3 class="dynamic-message"> Drag & drop any file here </h3>
                  <label class="label">
                    {" "}
                    or{" "}
                    <span class="browse-files">
                      {" "}
                      <input type="file" class="default-file-input" />{" "}
                      <span class="browse-files-text">browse file</span>{" "}
                      <span>from device</span>{" "}
                    </span>{" "}
                  </label>
                </div>
                <span class="cannot-upload-message">
                  {" "}
                  <span class="material-icons-outlined">error</span> Please
                  select a file first{" "}
                  <span class="material-icons-outlined cancel-alert-button">
                    cancel
                  </span>{" "}
                </span>
                <div class="file-block">
                  <div class="file-info">
                    {" "}
                    <span class="material-icons-outlined file-icon">
                      description
                    </span>{" "}
                    <span class="file-name"> </span> |{" "}
                    <span class="file-size"> </span>{" "}
                  </div>
                  <span class="material-icons remove-file-icon">delete</span>
                  <div class="progress-bar"> </div>
                </div>
                <button
                  type="button"
                  class="upload-button"
                  onChange={handlePhotoChange}
                >
                  {" "}
                  Upload{" "}
                </button>
              </div>
            </form>

            {/* <input
              type="file"
              id="familyPhotoInput"
              accept="image/*"
              aria-label="Subir foto de la familia"
              onChange={handlePhotoChange}
            /> */}
          </div>
        </div>
        <input
          className={classNames(formStyle.headerH1, formStyle.header)}
          type="text"
          value={nickname}
          onChange={handleNickname}
          placeholder="Apodo de la familia"
          aria-label="Apodo de la familia"
        />
        <button type="submit" onClick={handleNickname}>
          Establecer
        </button>

        <span className={style.close} onClick={onClose}>
          &times;
        </span>
        <h1 className={style.headerH1}>Modificar familia</h1>
        <p>Agrega un miembro.</p>
        <div className={style.addingMember}>
          <div className={style.selectRole}>
            <label htmlFor="role">Selecciona un rol:</label>
            <select
              name="role"
              value={newMember.role}
              onChange={handleNewMemberChange}
            >
              <option value="Tutor">Tutor</option>
              <option value="Tutora">Tutora</option>
              <option value="Niño">Niño</option>
              <option value="Niña">Niña</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={newMember.name}
              onChange={handleNewMemberChange}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="edad"
              value={newMember.edad}
              onChange={handleNewMemberChange}
              placeholder="Edad"
            />
            <button onClick={handleAddMember} className="addMemberBtn">
              Añadir miembro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModificarFamilia;
