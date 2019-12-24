<?php

namespace App\Http\Middleware;

use Closure;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $roless = 'all')
    {
        if(auth('admin')->check()){
            if($roless == "all"){
                return $next($request);
            }
            $admin_role = auth('admin')->user()->role;
            if($admin_role == 'master'){
                return $next($request);
            }
            $roles = explode(',',$roless);
            foreach ($roles as $role) {
                if($admin_role == $role){
                    return $next($request);
                }
            }
            return redirect('errors/home/admin_role='.$admin_role);
        }
        return redirect('errors/home/admin');
    }
}
