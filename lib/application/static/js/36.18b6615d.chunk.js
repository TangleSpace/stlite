(this["webpackJsonp@stlite/application"]=this["webpackJsonp@stlite/application"]||[]).push([[36],{1736:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return c}));var n=o(2),i=o(3),a=o(5),r=o(6),l=o(0),u=o.n(l),s=o(188),p=o(158),m=o(1),c=function(e){Object(a.a)(o,e);var t=Object(r.a)(o);function o(){var e;Object(n.a)(this,o);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).formClearHelper=new s.b,e.state={value:e.initialValue},e.commitWidgetValue=function(t){e.props.widgetMgr.setStringValue(e.props.element,e.state.value,t)},e.onFormCleared=function(){e.setState({value:e.props.element.default},(function(){return e.commitWidgetValue({fromUi:!0})}))},e.onColorClose=function(t){e.setState({value:t},(function(){return e.commitWidgetValue({fromUi:!0})}))},e}return Object(i.a)(o,[{key:"initialValue",get:function(){var e=this.props.widgetMgr.getStringValue(this.props.element);return void 0!==e?e:this.props.element.default}},{key:"componentDidMount",value:function(){this.props.element.setValue?this.updateFromProtobuf():this.commitWidgetValue({fromUi:!1})}},{key:"componentDidUpdate",value:function(){this.maybeUpdateFromProtobuf()}},{key:"componentWillUnmount",value:function(){this.formClearHelper.disconnect()}},{key:"maybeUpdateFromProtobuf",value:function(){this.props.element.setValue&&this.updateFromProtobuf()}},{key:"updateFromProtobuf",value:function(){var e=this,t=this.props.element.value;this.props.element.setValue=!1,this.setState({value:t},(function(){e.commitWidgetValue({fromUi:!1})}))}},{key:"render",value:function(){var e=this.props,t=e.element,o=e.width,n=e.disabled,i=e.widgetMgr,a=this.state.value;return this.formClearHelper.manageFormClearListener(i,t.formId,this.onFormCleared),Object(m.jsx)(p.a,{label:t.label,help:t.help,onChange:this.onColorClose,disabled:n,width:o,value:a})}}]),o}(u.a.PureComponent)}}]);
//# sourceMappingURL=36.18b6615d.chunk.js.map