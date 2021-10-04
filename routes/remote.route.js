const express = require('express');
const remote = require('../services/remote');
const router = new express.Router();
 
router.get('/hood', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await remote.hood(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/lock', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await remote.lock(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/roof/open', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await remote.roofSunroof(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/trunk', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await remote.trunkRelease(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/unlock', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await remote.unlock(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;