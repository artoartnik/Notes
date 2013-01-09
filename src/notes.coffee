jQuery ->
  #____MODELS____:
  
  #a note
  class Note extends Backbone.Model
    urlRoot: 'http://noteme.herokuapp.com/notes'
    
    defaults:
      completed: 0
      content: ''
      
    toJSON: ->
      note:
        completed: @get 'completed'
        content: @get 'content'
  
  #____COLLECTIONS____:
  
  #a collection of notes  
  class NoteList extends Backbone.Collection
    model: Note
    url: 'http://noteme.herokuapp.com/notes'
  
  #____VIEWS____:
  
  #view for a note
  class NoteView extends Backbone.View
    events:
      'click .done': 'toggle_done'
      'click .edit': 'edit'
      'click .delete': 'remove'
    
    tagName: 'li'
    template: Handlebars.compile($("#note-template").html());
    
    initialize: ->
      _.bindAll @
      
      @model.bind('change', @render)
      @model.bind('remove', @unrender)
      
    render: => 
      $(@el).html @template({content: @model.get('content'), completed: @model.get('completed')})
      @
    
    #remove element with jQuery
    unrender: =>
      $(@el).remove()
    
    #toggle the 'completed' property and save it
    toggle_done: ->
      if @model.get('completed') == 1
        @model.set completed : 0
      else
        @model.set completed : 1
        
      @model.save()
    
    #open the edit dialog   
    edit: ->
      new NoteEditView(model: @model)
    
    #delete this model
    remove: ->
      @model.destroy()
  
  #view for the edit dialog (doesn't work properly)
  class NoteEditView extends Backbone.View
    events:
      'click #note-save': 'save'
    
    el: $ '#dialog'
    template: Handlebars.compile($("#note-edit-template").html());
    
    initialize: ->
      _.bindAll @
      
      @render()
      
    render: ->
      $(@el).html @template({content: @model.get('content')})
      @
       
    save: ->
      @model.set content: $('#edit-note').val()
      @model.save()
      
      #clear the #dialog element and destroy the view (?)
      $(@el).html ''
      @destroy
  
  #view for the list of notes
  class NoteListView extends Backbone.View
    events: 'click #add-note': 'addNote'
    
    el: $ '#note-list'
    template: Handlebars.compile($("#note-list-template").html());
    notes: new NoteList
    
    initialize: ->
      _.bindAll @
      
      #fetch notes and render the view if successful        
      @notes.fetch
        success: (notes) =>
          @notes = notes
          @render()
          console.log "init: There are #{notes.length} notes in our collection."
      
        error: (notes, response) ->
          console.log "init: Server error: #{response.status}."
    
    render: ->
      $(@el).html @template()
      #append all the notes in our collection to the ul element
      $('ul').append (new NoteView model: note).render().el for note in @notes.models
    
    #add a new note
    addNote: ->
      note = new Note
      note.set content: $('#new-note').val()
      
      #add note to current collection if save is successful
      note.save {content: note.get('content'), completed: 0} 
        success: (note) =>
          @notes.add note
          @render()
          console.log "save: There are #{@notes.length} notes in our collection."
      
        error: (note, response) ->
          #display all errors in the console
          console.log(error.content) for error in jQuery.parseJSON(response.responseText).errors        
          console.log "save: Server error: #{response.status}."
    
  note_list_view = new NoteListView