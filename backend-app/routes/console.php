<?php

use Carbon\Carbon;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schedule;

// Artisan::command('inspire', function () {
//     $this->comment(Inspiring::quote());
// })->purpose('Display an inspiring quote')->hourly();

Schedule::command('sanctum:prune-expired --hours=24')->daily();
// Schedule::command(function () {
//     $experidePromotions = DB::table('promotions')->where('expired_at', '<', now())->pluck('id');

//     // Hapus detail_promotions
//     DB::table('detail_promotions')
//         ->whereIn('promotion_id', $experidePromotions)
//         ->delete();
// })->everyFifteenSeconds();
