import React from 'react';


const noop = files => {
    console.log(files[0].path);
    
};

const FileInput = ({ value, onChange = noop, ...rest }) => (
    <div>
        {Boolean(value.length) && (
            <div>Selected files: {value.map(f => f.name).join(', ')}</div>
        )}
        <label>
            Click to select some files...
            <input
                {...rest}
                style={{ display: 'none' }}
                type='file'
                onChange={e => {
                    onChange([...e.target.files]);
                }}
                multiple
            />
        </label>
    </div>
);

export default FileInput;
