<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Currency;
use App\Http\Requests\StoreCurrencyRequest;
use App\Http\Requests\UpdateCurrencyRequest;

class CurrencyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $currencies = Currency::with(['pairs'])->get();
        return response()->json($currencies);
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
    public function store(StoreCurrencyRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Currency $currency)
    {
        // $currency = Currency::find($currency);
        return response()->json($currency);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Currency $currency)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Currency $currency)
    {
        $currency = Currency::findOrFail($currency->id);
        
        // $request->validate([
        //     'name' => 'required|string',
        //     'code' => 'required|string|unique:currencies,code,' . $currency->id,
        // ]);

        $currency->update($request->only(['name', 'code']));

        return response()->json(['message' => 'Currency updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Currency $currency)
    {
        // Check if the currency instance exists
    if ($currency) {
        // Delete the currency
        $currency->delete();

        // Optionally, you can return a response indicating success
        return response()->json(['message' => 'Currency deleted successfully']);
    } else {
        // Return a response indicating the currency was not found
        return response()->json(['error' => 'Currency not found'], 404);
    }
    }
}
