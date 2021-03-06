/*
 * wysiwyg web editor
 *
 * suneditor.js
 * Copyright 2019 JiHong Lee.
 * MIT license.
 */
'use strict';

export default {
    toolbar: {
        save: '保存',
        font: '字体',
        formats: '格式',
        fontSize: '字号',
        bold: '胆大',
        underline: '下划线',
        italic: '斜体',
        strike: '删除线',
        subscript: '下标',
        superscript: '上标',
        removeFormat: '清除格式',
        fontColor: '字颜色',
        hiliteColor: '背景颜色',
        indent: '增加缩进量',
        outdent: '减少缩进量',
        align: '对齐方式',
        alignLeft: '左对齐',
        alignRight: '右对齐',
        alignCenter: '居中',
        justifyFull: '两端对齐',
        list: '名单',
        orderList: '编号',
        unorderList: '项目符号',
        horizontalRule: '插入水平线',
        hr_solid: '实线',
        hr_dotted: '点',
        hr_dashed: '虚线',
        table: '表格',
        link: '超链接',
        image: '图片',
        video: '视频',
        fullScreen: '全屏',
        showBlocks: '显示块区域',
        codeView: '代码视图',
        undo: '撤消',
        redo: '恢复',
        preview: '预览',
        print: '打印',
        tag_p: '段落格式',
        tag_div: '正文 (DIV)',
        tag_h: '标题',
        tag_quote: '引用',
        pre: '代码'
    },
    dialogBox: {
        linkBox: {
            title: '插入超链接',
            url: '网址',
            text: '字体',
            newWindowCheck: '在新标签页中打开'
        },
        imageBox: {
            title: '插入图片',
            file: '上传图片',
            url: '图片网址',
            altText: '替换文字'
        },
        videoBox: {
            title: '插入视频',
            url: '嵌入网址, YouTube'
        },
        caption: '标题',
        close: '取消',
        submitButton: '确定',
        revertButton: '恢复',
        proportion: '比例',
        basic: '基本',
        left: '左',
        right: '右',
        center: '居中',
        width: '宽度',
        height: '高度'
    },
    controller: {
        edit: '编辑',
        remove: '删除',
        insertRowAbove: '在上方插入',
        insertRowBelow: '在下方插入',
        deleteRow: '删除行',
        insertColumnBefore: '在左侧插入',
        insertColumnAfter: '在右侧插入',
        deleteColumn: '删除列',
        resize100: '放大 100%',
        resize75: '放大 75%',
        resize50: '放大 50%',
        resize25: '放大 25%',
        mirrorHorizontal: '翻转左右',
        mirrorVertical: '翻转上下',
        rotateLeft: '向左旋转',
        rotateRight: '向右旋转'
    }
};
