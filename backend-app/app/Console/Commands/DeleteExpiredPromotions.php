<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class DeleteExpiredPromotions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:delete-expired-promotions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    public function __construct()
    {
        parent::__construct();
    }
    /**
     * Execute the console command.
     */
    public function handle()
    {
        $experidePromotions = DB::table('promotions')->where('expired_at', '<', Carbon::now())->pluck('id');
        
        // Hapus detail_promotions
        DB::table('detail_promotions')
            ->whereIn('promotion_id', $experidePromotions)
            ->delete();

        return 0;
    }
}
