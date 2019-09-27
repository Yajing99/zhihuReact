import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LEdit from 'wangeditor';
import { 
	WriteWrapper,
	WriteHead,
	Logo,
	WriteWord,
	WriteButton,
	WriteArticle,
	WriteContainer,
	WriteBody,
	WriteEditorMenu,
	WriteEditorBody,

} from './style';

function Write() {
	const editorContent = useSelector((state) => state.getIn(['write', 'editorContent']));
	const submitArticle = useSelector((state) => state.getIn(['write', 'submitArticle']));
	const dispatch = useDispatch();
    

	useEffect(() => {
		const elemMenu = document.querySelector('.editorElemMenu');
		const elemBody = document.querySelector('.editorElemBody');
		const editor = new LEdit(elemMenu, elemBody);
		editor.customConfig.onChange = html => {
			dispatch({ type : 'EDITOR_CHANGE', words : html })
		};
		editor.customConfig.menus = [
			'head',
			'bold',
			'fontSize',
			'fontName',
			'italic',
			'underline',
			'strikeThrough',
			'foreColor',
			'backColor',
			'justify',
			'emoticon',
			'image',
			'table',
			'video',
			'code',
			'undo',
			'redo'
		];
		editor.customConfig.uploadImgShowBase64 = true;
		editor.create();
		if(submitArticle) {
			console.log(editor.text.text());
		}
	})

	return (
		<WriteWrapper>
			<WriteHead>
				<WriteContainer>
					<Logo />
					<WriteWord>写文章</WriteWord>
					<WriteButton 
					 onClick = { () => dispatch({ type : 'SUBMIT_ARTICLE' }) }
					>提交</WriteButton>
					<WriteArticle>我的文章</WriteArticle>
				</WriteContainer>
			</WriteHead>
			<WriteBody>
				<WriteEditorMenu className='editorElemMenu' />
				<WriteEditorBody className='editorElemBody'>
					{ editorContent }
				</WriteEditorBody>
			</WriteBody>
		</WriteWrapper>
	);
}

export default Write;