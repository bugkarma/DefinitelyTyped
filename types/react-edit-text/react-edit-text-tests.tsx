import { EditText, EditTextarea, onSaveProps } from 'react-edit-text';
import * as React from 'react';

const onSaveTest = ({ name, value }: onSaveProps) => {
    console.log(name + value);
};

<EditText />;
<EditText id="firstName" />;
<EditText name="firstName" />;
<EditText className="firstName" />;
<EditText value="firstName" />;
<EditText type="email" placeholder="Enter your email" />;
<EditText type="email" name="email" />;
<EditText type="email" name="email" onSave={onSaveTest} />;
<EditText inline />;
<EditText style={{ margin: 0 }} />;
<EditText readonly />;

<EditTextarea />;
<EditTextarea id="desc" />;
<EditTextarea name="desc" />;
<EditTextarea className="desc" />;
<EditTextarea value="Description" />;
<EditTextarea placeholder="Enter a description" />;
<EditTextarea name="desc" onSave={onSaveTest} />;
<EditTextarea rows={5} />;
<EditTextarea style={{ padding: 0 }} />;
<EditTextarea readonly />;
