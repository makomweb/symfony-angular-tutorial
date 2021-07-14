<?php

namespace App\Controller\Resources;

use DateTime;

class WeatherResource
{
    /** @var int */
    public $temperature;

    /** @var string */
    public $sky;
    /**
     * @var DateTime
     */
    public $dateTime;

    public function __construct(int $temperature, string $sky, DateTime $dateTime)
    {
        $this->temperature = $temperature;
        $this->sky = $sky;
        $this->dateTime = $dateTime;
    }
}