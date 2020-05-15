<?php

$portfolio_items = [
    [
        'name' => 'Project Title 1',
        'description' => 'This is a description',
        'url' => '/this-is-the-url',
        'featuredImage' => 'https://source.unsplash.com/random'
    ],
    [
        'name' => 'Project Title 2',
        'description' => 'This is a description',
        'url' => '/this-is-the-url',
        'featuredImage' => 'https://source.unsplash.com/random'
    ],
    [
        'name' => 'Project Title 3',
        'description' => 'This is a description',
        'url' => '/this-is-the-url',
        'featuredImage' => 'https://source.unsplash.com/random'
    ],
    [
        'name' => 'Project Title 4',
        'description' => 'This is a description',
        'url' => '/this-is-the-url',
        'featuredImage' => 'https://source.unsplash.com/random'
    ]
];

echo json_encode( ['portfolio' => $portfolio_items ]);
exit;