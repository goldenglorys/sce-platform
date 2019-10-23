<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Content;
use App\ Category;
use App\title;
use Image;
use App\User;
class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getcontent($id)
    {
        return response()->json(
            // Activities::where('id','=',1)->get(),
            [
        'name'=>title::orderBy('id')->join('categories','titles.category_id','=','Categories.id')
        ->join('activities','categories.activity_id','=','activities.id')
        ->join('Users','titles.user_id','=','Users.id')
        ->select('titles.*','categories.catname','categories.destription','categories.activity_id','activities.actname','users.firstname','users.lastname','users.middlename')
       ->where('titles.id','=',$id)->get(),
       'content'=>content::orderBy('id')->join('titles','contents.name_id','=','titles.id')
        ->select('contents.*','titles.name_title','titles.location','titles.t_image','titles.about')
       ->where('name_id','=',$id)
       
       ->get()
       ]
    );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    
    public function getactid($id)
    {
        // return $id;
        return response()->json(
        
            Category::where('activity_id','=',$id)->get()
           
        );
    }
    public function store(Request $request)
    {
        $authid=auth()->user()->id;
        
          $request->merge(['user_id'=>$authid]);
         $detcontents = $request->contents;
         if ($request->t_image ){
            $file=$request->t_image;
            $filename=time().'.' . explode('/', explode(':', substr($file, 0, strpos($file,';')))[1])[1];
         
            Image::make($file)->resize(300, 300)->save(public_path('/upload/uploads/'.$filename));
           
            $request->merge(['t_image'=>$filename]);
           
        }
        $content= title::create($request-> all());
        // return $content->id;

        $contentData=[];
        
        foreach ($detcontents as $item) {
           
            $contentData[] =[
             'header'=>$item['header'],
             'content' =>$item['content'],
           
             'name_id' => $content->id,
           
            ] ; 
        }
     
         Content::insert($contentData);
         return $contentData;
    }

 
    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        //
    }

   
    public function destroy($id)
    {
        //
    }
}
