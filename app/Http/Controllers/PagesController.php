<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function about() 
    {
        return view('about');
    }

    public function booking() 
    {
        return view('booking');
    }

    public function vehicles() 
    {
        return view('vehicles');
    }

    public function reports() 
    {
        return view('reports');
    }

    public function search()
    {
        return view('search');
    }


}
