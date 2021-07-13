<?php

namespace App\Controller\Resources;

class WeatherResource
{
    /** @var int */
    public $temperature;

    /** @var string */
    public $sky;

    public function __construct(int $temperature, string $sky)
    {
        $this->temperature = $temperature;
        $this->sky = $sky;
    }
}