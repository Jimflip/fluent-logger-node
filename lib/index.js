var FluentSender = require('./sender').FluentSender;

var sender = new FluentSender('debug');

module.exports = {
  configure: function(tag, options){
    sender.end();
    sender = new FluentSender(tag, options);
  },

  emit: function(label, data, callback){
    sender.emit(label, data, callback);
  },

  addEvent: function(label, data, time, callback){
    sender.addEvent(label, data, time, callback);
  },

  end: function(label, data){
    sender.end(label, data);
  },

  createFluentSender: function(tag, options){
    return new FluentSender(tag, options);
  },

  support: {
    log4jsAppender: function(options){
      var log4jsSupport = require('../lib/log4js');
      return log4jsSupport.appender(options);
    }
  }
}