import React, { useState } from 'react';

const onSubmit = e => {
    e.preventDefault();
    var fileInput = document.querySelector('#file-upload');
    var files = fileInput.files;

    console.log(files[0]);
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

const ScreenGenerator = () => {
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
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ScreenGenerator;
