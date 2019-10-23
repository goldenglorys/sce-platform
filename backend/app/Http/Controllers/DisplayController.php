<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\title;
use App\Category;
use App\Content;
use App\Activities;
class DisplayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */



    public function displayevent()
    {
        return response()->json(
            
            [

                'event' =>Activities::where('id','=',1)->get(),
                'subevent'=>title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',1)
                ->get()
            ]
        );
    }

    public function displaylocation()
    {
        return response()->json(
            
            [
                'event' =>Activities::where('id','=',6)->get(),
                'subevent'=>title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',6)
               ->inRandomOrder()->take(4)
                ->get()
            ]
        );
    }
    public function displayartifact()
    {
        return response()->json(
            [

                'event' =>Activities::where('id','=',2)->get(),
                'subevent'=>title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',2)
               ->inRandomOrder()->take(4)
               ->get()
            ]
        );
    }
    public function displaybusiness()
    {
        return response()->json(
            [

                'event' =>Activities::where('id','=',3)->get(),
                'subevent'=>title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',3)
               ->inRandomOrder()->take(4)
                ->get()
            ]
        );
    }
    public function displaypeople()
    {
        return response()->json(
            [
                'event' =>Activities::where('id','=',4)->get(),
                'subevent'=>title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
                ->select('titles.*','categories.catname','categories.destription','categories.activity_id')
               ->where('activity_id','=',4)
               ->inRandomOrder()->take(4)
              ->get()
            ]
        );
    }
    public function displaynews()
    {
        return response()->json(
            [

                'event' =>Activities::where('id','=',5)->get(),
                'subevent'=>title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
                ->join('Users','titles.user_id','=','Users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
               ->where('activity_id','=',5)
               ->inRandomOrder()->take(8)
               ->get()
            ]
        );
    }

    public function getalltitle()
    {
        return response()->json(
          
                title::orderBy('id')->join('categories','titles.category_id','=','categories.id')
                ->join('Users','titles.user_id','=','Users.id')
            ->select('titles.*','categories.catname','categories.destription','categories.activity_id','users.firstname','users.lastname','users.middlename')
            ->inRandomOrder()->take(4) 
               ->get()
        
        );
    }
    public function search($searchTerm)
    {
       
       
        return response()->json(
            title::whereLike(['location', 'name_title'], $searchTerm)->get()
            
        
        );
    }

}
