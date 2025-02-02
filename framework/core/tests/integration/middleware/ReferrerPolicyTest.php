<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Tests\integration\middleware;

use Flarum\Testing\integration\TestCase;
use PHPUnit\Framework\Attributes\Test;

class ReferrerPolicyTest extends TestCase
{
    #[Test]
    public function has_referer_header()
    {
        $response = $this->send(
            $this->request('GET', '/')
        );
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertArrayHasKey('Referrer-Policy', $response->getHeaders());
    }

    #[Test]
    public function has_default_referer_policy()
    {
        $response = $this->send(
            $this->request('GET', '/')
        );
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertEquals('same-origin', $response->getHeader('Referrer-Policy')[0]);
    }
}
