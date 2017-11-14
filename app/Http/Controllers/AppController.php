<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
	public function frontend()
	{
		return view('frontend.app');
	}

	public function backend()
	{
		return view('backend.app');
	}
}
