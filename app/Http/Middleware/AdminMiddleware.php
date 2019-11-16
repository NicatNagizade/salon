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
    public function handle($request, Closure $next, $roless = 'master')
    {
        if(auth('admins')->check()){
            $admin_role = auth('admins')->user()->role;
            if($admin_role == 'master'){
                return $next($request);
            }
            $roles = explode(',',$roless);
            foreach ($roles as $role) {
                if($admin_role == $role){
                    return $next($request);
                }
            }
        }
        return route('errors',['admin']);
    }
}
