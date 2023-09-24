import { useEffect, useState, createRef } from 'react';

import validate from '../../../utils/validate';

import Input from './Input/Input';
import FileItem from './FileItem/FileItem';

import './ReqForm.css';

function ReqForm() {
  const [emailValid, setEmailValid] = useState(true);
  const [telValid, setTelValid] = useState(true);

  const [emailFilled, setEmailFilled] = useState(false);
  const [telFilled, setTelFilled] = useState(false);
  const [textAreaFilled, setTextAreaFilled] = useState(false);

  const [formSendStatus, setFormSendStatus] = useState(null);

  const [fileList, setFileList] = useState([]);

  function handleChangeEmail(e) {
    setEmailValid(true);
    setFormSendStatus(null);
    setFormSendStatus(null);
    if (e.target.value) {
      setEmailFilled(true);
    } else {
      setEmailFilled(false);
    }
  }

  function handleChangeTel(e) {
    setTelValid(true);
    setFormSendStatus(null);
    setFormSendStatus(null);
    if (e.target.value) {
      setTelFilled(true);
    } else {
      setTelFilled(false);
    }
  }

  function handleChangeTextArea(e) {
    setFormSendStatus(null);
    if (e.target.value) {
      setTextAreaFilled(true);
    } else {
      setTextAreaFilled(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValidEmail = validate.Email(e.target.elements.email.value);
    setEmailValid(isValidEmail);
    const isValidTel = validate.PhoneNumber(e.target.elements.phone.value);
    setTelValid(isValidTel);

    if (isValidEmail && isValidTel) {
      let formData = new FormData(e.target);

      fetch('https://backend.cyberia.studio/api/v1/feedbacks', {
        method: 'POST',
        body: formData,
      }).then((res) => {
        if (res.ok) {
          e.target.elements.email.value = '';
          e.target.elements.phone.value = '';
          e.target.elements.message.value = '';
          e.target.attachment.files = null;
          setFileList([]);
          setFormSendStatus(true);
        } else {
          setFormSendStatus(false);
        }
      });
    } else {
    }
  }

  const fileInput = createRef();

  useEffect(() => {}, []);

  const handleFileChange = (e) => {
    const dt = new DataTransfer();
    fileList.forEach((file) => dt.items.add(file));
    Array.from(e.target.files).forEach((file) => dt.items.add(file));
    e.target.files = dt.files;
    setFileList([...e.target.files]);
    setFormSendStatus(null);
  };

  function handleDeleteFileItem(name, size) {
    const dt = new DataTransfer();
    Array.from(fileInput.current.files)
      .filter((file) => !(file.name === name && file.size === size))
      .forEach((file) => dt.items.add(file));
    fileInput.current.files = dt.files;
    setFileList([...fileInput.current.files]);
  }

  return (
    <form
      noValidate
      className='req-form'
      encType='multipart/form-data'
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className='req-form__input'>
        <Input
          name='email'
          placeholder='E-mail'
          type='email'
          errorMessage='Некорретный адрес почты'
          isValid={emailValid}
          onChange={handleChangeEmail}
          filled={emailFilled}
        />
      </div>
      <div className='req-form__input'>
        <Input
          name='phone'
          placeholder='Телефон'
          type='tel'
          errorMessage='Некорретный номер'
          isValid={telValid}
          onChange={handleChangeTel}
          filled={telFilled}
        />
      </div>
      <div className='req-form__textarea-with-file'>
        <textarea
          className='req-form__textarea'
          name='message'
          onChange={(e) => handleChangeTextArea(e)}
        ></textarea>

        <div
          className={`req-form__textarea-label ${
            textAreaFilled ? 'req-form__textarea-label_filled' : ''
          }`}
        >
          Сообщение
        </div>
        <div className='req-form__add-files'>
          <div className='req-form__file-list'>
            {fileList.map((file, i) => (
              <FileItem
                name={file.name}
                size={file.size}
                onDelete={() => handleDeleteFileItem(file.name, file.size)}
              />
            ))}
          </div>
          <label className='req-form__label' htmlFor='file'>
            <span className='req-form__img'></span>
            <input
              ref={fileInput}
              onChange={handleFileChange}
              className='req-form__file'
              type='file'
              id='file'
              name='attachment'
              multiple='multiple'
            />
          </label>
        </div>
      </div>
      <div className='req-form__send'>
        <button className='req-form__button' type='submit'>
          ОТПРАВИТЬ
        </button>
        <span className='req-form__agreement'>
          Нажимая “Отправить”, Вы даете согласие <br /> на обработку
          персональных данных
        </span>
      </div>
      <span
        className={`req-form__status ${
          formSendStatus === true
            ? 'req-form__status_success_yes'
            : 'req-form__status_success_no'
        }`}
      >
        {formSendStatus === null
          ? ''
          : formSendStatus
          ? 'Ваша заявка успешно отправлена'
          : 'Не удалось отправить заявку, повторите попытку позднее'}
      </span>
    </form>
  );
}

export default ReqForm;
