<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\review\ReviewCollection;
use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReviewController extends Controller
{
    public function index(Request $request)
    {
        $reviews = Review::with('user', 'product')
            ->whereHas('product', function ($query) use ($request) {
                $query->where('slug', $request->slug);
            })
            ->limit(5)
            ->orderBy('id', 'desc')
            ->get();

        $ratings = Review::select('rating', DB::raw('count(*) as total'))
            ->whereHas('product', function ($query) use ($request) {
                $query->where('slug', $request->slug);
            })
            ->groupBy('rating')
            ->orderBy('rating', 'desc')
            ->get()
            ->keyBy('rating');

        $ratingsArray = [];
        for ($i = 5; $i >= 1; $i--) {
            $ratingsArray[$i] = [
                'rating' => $i,
                'total' => $ratings->has($i) ? $ratings[$i]->total : 0
            ];
        }

        $sumReviews = Review::whereHas('product', function ($query) use ($request) {
            $query->where('slug', $request->slug);
        })->count();

        $averageRating = Review::whereHas('product', function ($query) use ($request) {
            $query->where('slug', $request->slug);
        })->avg('rating');

        $sumRating = Review::whereHas('product', function ($query) use ($request) {
            $query->where('slug', $request->slug);
        })->sum('rating');

        return new ReviewCollection($reviews, $ratingsArray, $sumRating, $sumReviews, $averageRating);
    }
}
