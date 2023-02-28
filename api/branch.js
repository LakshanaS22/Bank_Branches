import express from 'express'
import {createClient} from '@supabase/supabase-js'
import bodyparse from 'body-parser'
const app = express()

const supabase = createClient(
    'https://slmbjhgpxwzaryibpfav.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbWJqaGdweHd6YXJ5aWJwZmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1NjQzNjMsImV4cCI6MTk5MzE0MDM2M30.UvXDjB6_fqEJzjMONM4tLuxCEXQPxs5La_y5gL1vsnI'
);
app.use(bodyparse.json())
app.use(
    bodyparse.urlencoded({
        extended: true,
    })
)

export default async function branch(req, res) {
   
    console.log("No error")
        const {data, error} = await supabase
            .from('Bank')
            .select()
.or(`branch.ilike.%${req.query.q.toLowerCase()}%`)
            .order('ifsc',{ascending:false})
.range(parseInt(req.query.offset),parseInt(req.query.offset)+parseInt(req.query.limit)-1)
        res.send(data)
}








