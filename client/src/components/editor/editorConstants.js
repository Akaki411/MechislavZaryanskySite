import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import ImageTool from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import AudioTool from 'editorjs-audio-tool'
import SimpleAudio from "./audio/simple-audio"

export const EDITOR_JS_TOOLS = {
    embed: Embed,
    table: Table,
    marker: Marker,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: {
        class: LinkTool,
        config: {
            endpoint: process.env.REACT_APP_API_URL + '/api/tools/parse-link',
        }
    },
    image: {
        class: ImageTool,
        config: {
            endpoints: {
                byFile: process.env.REACT_APP_API_URL + '/api/tools/upload-image',
                byUrl: process.env.REACT_APP_API_URL + '/api/tools/upload-image',
            },
            captionPlaceholder: "Подпись..."
        }
    },
    raw: Raw,
    header: Header,
    quote: Quote,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,
    audio: {
        class: SimpleAudio,
        config: {
            endpoint: process.env.REACT_APP_API_URL + '/api/tools/upload-audio',
            static: process.env.REACT_APP_API_URL + "/"
        }
    }
}
