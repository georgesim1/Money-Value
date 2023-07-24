<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pair;
use App\Http\Requests\StorePairRequest;
use App\Http\Requests\UpdatePairRequest;

class PairController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
            $pairs = Pair::with(['from_currency', 'to_currency'])->get();
            return response()->json($pairs);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePairRequest $request)
    {
         // Validate the request
    $validated = $request->validate([
        'from_currency_id' => 'required|exists:currencies,id',
        'to_currency_id' => 'required|exists:currencies,id',
        'currency_rate' => 'required|numeric',
    ]);

    // Create the new pair
    $pair = Pair::create($validated);

    // Return a successful response
    return response()->json(['message' => 'Pair created successfully', 'pair' => $pair]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Pair $pair)
    {

     $pairs = Pair::with(['from_currency', 'to_currency'])->where('id', $pair->id)->get();
     return response()->json($pairs[0]);
       
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pair $pair)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePairRequest $request, Pair $pair)
    {
    // Fetch the pair from the database
    $pair = Pair::findOrFail($pair->id);
        
    // Define validation rules
    $request->validate([
        'from_currency_id' => 'required|exists:currencies,id',
        'to_currency_id' => 'required|exists:currencies,id',
        'currency_rate' => 'required|numeric'
    ]);

    // Update the pair with request data
    $pair->update($request->only(['from_currency_id', 'to_currency_id', 'currency_rate']));

    // Return a response indicating success
    return response()->json(['message' => 'Pair updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pair $pair)
    {
              // Check if the currency instance exists
    if ($pair) {
        // Delete the currency
        $pair->delete();

        // Optionally, you can return a response indicating success
        return response()->json(['message' => 'Pair deleted successfully']);
    } else {
        // Return a response indicating the currency was not found
        return response()->json(['error' => 'Pair not found'], 404);
    }
    }
}
