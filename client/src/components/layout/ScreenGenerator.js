import React from 'react';
import axios from 'axios';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';

const ScreenGenerator = ({ setAlert }) => {
    const api = axios.create({
        baseURL: '/api',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const onSubmit = async e => {
        e.preventDefault();
        var formData = new FormData();
        var fileInput = document.querySelector('#file-upload');
        var files = fileInput.files;
        console.log(files[0]);
        formData.append('upload', files[0]);

        const res = await api.post('/screenGenerator', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        setAlert(files[0].name, 'success');
    };

    const onChange = e => {
        // love the query selector
        var fileInput = document.querySelector('#file-upload');
        var files = fileInput.files;
        // cache files.length
        var fl = files.length;
        var i = 0;

        while (i < fl) {
            // localize file var in the loop
            var file = files[i];
            alert(file.name);
            i++;
        }
        console.log(e.target.files);
    };

    const onClick = e => {
        console.log(e.target);
        setAlert('test', 'danger');
    };
    return (
        <section className='landing'>
            <div className='dark-overlay'>
                <div className='landing-inner'>
                    <h1 className='text-center'>Screen Generator</h1>
                    <form encType='multipart/form-data' onSubmit={onSubmit}>
                        <label className='custom-file-upload btn btn-light'>
                            <input
                                id='file-upload'
                                name='fileUpload'
                                type='file'
                                onChange={onChange}
                                multiple
                                required
                            />
                            Choose Files
                        </label>
                        <span id='file-selected'></span>
                        <div>
                            <input
                                id='submit-button'
                                className='btn btn-primary my-1'
                                type='submit'
                                name='btn_upload_multiple_images'
                                value='Upload'
                            />
                        </div>
                        <div
                            id='button-test'
                            className=' btn btn-primary'
                            onClick={onClick}
                        ></div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default connect(null, { setAlert })(ScreenGenerator);
