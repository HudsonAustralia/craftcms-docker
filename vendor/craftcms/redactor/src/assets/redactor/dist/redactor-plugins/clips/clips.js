!function(i){i.add("plugin","clips",{translations:{en:{clips:"Clips","clips-select":"Please, select a clip"}},modals:{clips:""},init:function(i){this.app=i,this.opts=i.opts,this.lang=i.lang,this.toolbar=i.toolbar,this.insertion=i.insertion},onmodal:{clips:{open:function(i){this._build(i)}}},start:function(){if(this.opts.clips){var i={title:this.lang.get("clips"),api:"plugin.clips.open"};this.toolbar.addButton("clips",i).setIcon('<i class="re-icon-clips"></i>')}},open:function(i){var t={title:this.lang.get("clips"),width:"600px",name:"clips"};this.app.api("module.modal.build",t)},_build:function(i){var t=i.getBody(),s=this._buildLabel(),l=this._buildList();this._buildItems(l),t.html(""),t.append(s),t.append(l)},_buildLabel:function(){var t=i.dom("<label>");return t.html(this.lang.parse("## clips-select ##:")),t},_buildList:function(){var t=i.dom("<ul>");return t.addClass("redactor-clips-list"),t},_buildItems:function(t){for(var s=this.opts.clips,l=0;l<s.length;l++){var n=i.dom("<li>"),a=i.dom("<span>");a.attr("data-index",l),a.html(s[l][0]),a.on("click",this._insert.bind(this)),n.append(a),t.append(n)}},_insert:function(t){var s=i.dom(t.target).attr("data-index"),l=this.opts.clips[s][1];this.app.api("module.modal.close"),this.insertion.insertHtml(l)}})}(Redactor);