const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const dbURI = 'mongodb + srv://ramazan2000:Merve1998@libraryappbooks.ha8xt.mongodb.net/LibraryAppBooks?retryWrites=true&w=majority';
mongoose.connect(dbURI);