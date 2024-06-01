const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv').config();


console.log(process.env.URL_DATABASE);

// Configura Supabase
const supabaseUrl = process.env.URL_DATABASE;
const supabaseKey = process.env.KEY_DATABASE;

const supabase = createClient(supabaseUrl, supabaseKey);
exports.supabase = { basededatos };


