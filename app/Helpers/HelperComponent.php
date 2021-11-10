<?php

namespace App\Helpers;

class HelperComponent
{

    public static function SideBar()
    {
        return [
            [
                "heading" => "Menu",
            ],
            [
                "single_link" => setSingleLink("dashboard", "home", "dashboard-view", "/"),
            ],
            [
                "heading" => "Management",
            ],

            [

                "menu" => [
                    "title" => 'User Management',
                    "icon" => "user",
                    "sub_menu" => [
                        setSubMenu(
                            "Users",
                            null,
                            "users-view",
                            "/users",
                        ),
                        setSubMenu(
                            "Roles",
                            null,
                            "roles-view",
                            "/roles",
                        ),
                        setSubMenu(
                            "Permissions",
                            null,
                            "permissions-view",
                            "/permissions",
                        ),

                    ]

                ],

            ],
            [
                "single_link" => setSingleLink("Customers", "users", "customers-view", "/customers"),
            ],
            [
                "heading" => "Apps",
            ],
            [

                "menu" => [
                    "title" => 'Ecommerce',
                    "icon" => "shopping-cart",
                    "sub_menu" => [
                        setSubMenu(
                            "Categories",
                            null,
                            "categories-view",
                            "/categories",
                        ),
                        setSubMenu(
                            "Products",
                            null,
                            "products-view",
                            "/products",
                        ),

                        setSubMenu(
                            "Orders",
                            null,
                            "orders-view",
                            "/orders",
                        ),

                    ]

                ],

            ],
            [
                "heading" => "Content",
            ],
            [
                "single_link" => setSingleLink("Services", "layers", "services-view", "/services"),
            ],
            [
                "heading" => "Tool",
            ],
            [

                "menu" => [
                    "title" => 'Settings',
                    "icon" => "settings",
                    "sub_menu" => [
                        setSubMenu(
                            "Profile",
                            null,
                            "profile-view",
                            "/profile",
                        ),
                        setSubMenu(
                            "Lock Screen",
                            null,
                            "lockscreen-view",
                            "/lock-screen",
                        ),



                    ]

                ],

            ],
            [
                "heading" => "Session",
            ],
            [
                "single_link" => setSingleLink("Log out", "log-out", "services-view", "/logout"),
            ],


        ];
    }
}
