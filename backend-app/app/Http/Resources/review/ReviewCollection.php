<?php

namespace App\Http\Resources\review;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ReviewCollection extends ResourceCollection
{
    protected $rating;
    protected $sumRating;
    protected $sumReview;
    protected $avgRating;

    public function __construct($resource, $rating, $sumRating, $sumReview, $avgRating)
    {
        parent::__construct($resource);
        $this->rating = $rating;
        $this->sumRating = $sumRating;
        $this->avgRating = $avgRating;
        $this->sumReview = $sumReview;
    }

    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'sumRating' => $this->sumRating,
            'avgRating' => round($this->avgRating, 1),
            'sumReview' => $this->sumReview,
            'rating' => $this->rating,
            'reviews' => $this->collection->transform(function ($reviews) {
                return [
                    'review' => [
                        'id' => $reviews->id,
                        'rating' => $reviews->rating,
                        'created' => $reviews->created_at->locale('id')->diffForHumans(),
                        'comment' => $reviews->comment,
                        'user' => [
                            'id' => $reviews->user->id,
                            'name' => $reviews->user->name,
                            'image' => $reviews->user->profile->profile,
                        ]
                    ]
                ];
            })
        ];
    }
}
