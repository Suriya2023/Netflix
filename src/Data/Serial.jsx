  export const SeralData = [
    {
        "success": {
            "menu": {
                "template": "MenuWidget",
                "widget": {
                    "@type": "type.googleapis.com/widget.MenuWidget",
                    "data": {
                        "items": [
                            {
                                "default_icon": "icon-home-line",
                                "active_icon": "icon-home-fill",
                                "title": "Home",
                                "is_active": true,
                                "actions": {
                                    "on_click": [
                                        {
                                            "page_navigation": {
                                                "page_type": "LandingPage",
                                                "page_url": "/v2/pages/home",
                                                "page_slug": "/in/home"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "default_icon": "icon-search-line",
                                "active_icon": "icon-search-fill",
                                "title": "Search",
                                "actions": {
                                    "on_click": [
                                        {
                                            "page_navigation": {
                                                "page_type": "ExplorePage",
                                                "page_url": "/v2/pages/explore",
                                                "page_slug": "/in/explore"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "default_icon": "icon-tv-line",
                                "active_icon": "icon-tv-fill",
                                "title": "TV",
                                "actions": {
                                    "on_click": [
                                        {
                                            "page_navigation": {
                                                "page_type": "LandingPage",
                                                "page_url": "/v2/pages/shows",
                                                "page_slug": "/in/shows"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "default_icon": "icon-movies-line",
                                "active_icon": "icon-movies-fill",
                                "title": "Movies",
                                "actions": {
                                    "on_click": [
                                        {
                                            "page_navigation": {
                                                "page_type": "LandingPage",
                                                "page_url": "/v2/pages/movies",
                                                "page_slug": "/in/movies"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "default_icon": "icon-sports-line",
                                "active_icon": "icon-sports-fill",
                                "title": "Sports",
                                "actions": {
                                    "on_click": [
                                        {
                                            "page_navigation": {
                                                "page_type": "LandingPage",
                                                "page_url": "/v2/pages/sports",
                                                "page_slug": "/in/sports"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "default_icon": "icon-creators-line",
                                "active_icon": "icon-creators-fill",
                                "title": "Sparks",
                                "actions": {
                                    "on_click": [
                                        {
                                            "page_navigation": {
                                                "page_type": "LandingPage",
                                                "page_url": "/v2/pages/creators",
                                                "page_slug": "/in/creators"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "default_icon": "icon-category-line",
                                "active_icon": "icon-category-fill",
                                "title": "Categories",
                                "actions": {
                                    "on_click": [
                                        {
                                            "page_navigation": {
                                                "page_type": "OverlayDraggableSheetPage",
                                                "page_url": "/v2/pages/categories",
                                                "page_slug": "/in/categories"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "default_icon": "icon-user-line",
                                "active_icon": "icon-user-fill",
                                "title": "My Space",
                                "actions": {
                                    "on_click": [
                                        {
                                            "page_navigation": {
                                                "page_type": "MyPage",
                                                "page_url": "/v2/pages/mypage",
                                                "page_slug": "/in/mypage"
                                            }
                                        }
                                    ]
                                }
                            }
                        ],
                        "refresh_url": "/v2/pages/104/spaces/61/widgets/67?wti_name=Menu",
                        "invalidate_on": [
                            "TOKEN_CHANGED",
                            "PROFILE_UPDATED"
                        ]
                    }
                },
                "id": "67",
                "defer_id": "67",
                "unique_identifier": "70"
            },
            "page": {
                "id": "explore",
                "template": "ExplorePage",
                "spaces": {
                    "explore_browse": {
                        "id": "explore_browse",
                        "template": "TraySpace"
                    },
                    "search_suggestions": {
                        "id": "search_suggestions",
                        "template": "TraySpace",
                        "widget_wrappers": [
                            {
                                "template": "GridWidget",
                                "widget": {
                                    "@type": "type.googleapis.com/widget.GridWidget",
                                    "widget_commons": {
                                        "version": "1",
                                        "name": "GridWidget"
                                    },
                                    "data": {
                                        "title": "Trending in India",
                                        "column_number": 7,
                                        "title_style": "DESKTOP_TITLE_TITLE_1",
                                        "items": [
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExElhiUAoKMTk3MTAwMjI3NBILTVRWIFJvYWRpZXMaC01UViBSb2FkaWVzIgRTSE9XKgdSZWFsaXR5MKK37KsHQgNNVFZqA2hpbnIDaGluWgQIARABagIIAnABGlUKG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBIIdHJlbmRpbmcaG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldCADKgZzZWFyY2gyA2VuZzgC"
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/4405/1744464634405-v",
                                                            "alt": "MTV Roadies"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1971002274",
                                                                        "page_slug": "/in/shows/mtv-roadies/1971002274"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "MTV Roadies",
                                                                        "page_url": "/in/shows/mtv-roadies/1971002274",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/4996/1744464614996-h",
                                                                            "alt": "MTV Roadies"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESVmJQCgoxOTcxMDAyMjc0EgtNVFYgUm9hZGllcxoLTVRWIFJvYWRpZXMiBFNIT1cqB1JlYWxpdHkworfsqwdCA01UVmoDaGlucgNoaW5aBAgBEAFqAggBGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/9672/1744464679672-i",
                                                                "alt": "MTV Roadies"
                                                            },
                                                            "content_info": {
                                                                "title": "MTV Roadies",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/1389/1744464661389-t",
                                                                    "alt": "MTV Roadies"
                                                                },
                                                                "description": "After 19 seasons, Roadies is back! Season 20, Roadies XX, introduces a thrilling new element: betrayal. Expect the unexpected.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "MTV"
                                                                    },
                                                                    {
                                                                        "value": "U/A 16+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGtcBCgoxOTcxMDAyMjc0EgtNVFYgUm9hZGllcxoLTVRWIFJvYWRpZXMiBFNIT1cqB1JlYWxpdHkworfsqwdCA01UVmoDaGlucgNoaW6SAn5pbWFnZV92YXJpYW50PURFRkFVTFQsYXJ0d29ya19sb2dpYz1kZWZhdWx0LHRoZW1lPURFRkFVTFQsc2NyaXB0X2xhbmd1YWdlPXVua25vd24sY2FsbG91dF9sYW5ndWFnZXM9dW5rbm93bixzY3JpcHRUeXBlPWFydHdvcmvqAgNNVFZaBAgBEAEiVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAIoATICCAI="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1971002274&fallbackEpisodeId=1971046815",
                                                                                    "page_slug": "/in/shows/mtv-roadies/1971002274/watch?fallbackEpisodeId=1971046815"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "MTV Roadies",
                                                                                    "page_url": "/in/shows/mtv-roadies/1971002274",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/4996/1744464614996-h",
                                                                                        "alt": "MTV Roadies"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESVmJQCgoxOTcxMDAyMjc0EgtNVFYgUm9hZGllcxoLTVRWIFJvYWRpZXMiBFNIT1cqB1JlYWxpdHkworfsqwdCA01UVmoDaGlucgNoaW5aBAgBEAFqAggBGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1971002274"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1971002274",
                                                                                    "page_slug": "/in/shows/mtv-roadies/1971002274"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "MTV Roadies,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEm9iZwoKMTI3MTM4NjY5ORIQSmFhZHUgVGVyaSBOYXphchoQSmFhZHUgVGVyaSBOYXphciIEU0hPVyoHRmFudGFzeTDLpJ/eBEIIU3RhclBsdXNiBkdvdGhpY2oDaGlucgNoaW5aBAgBEAFqAggCcAIaVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAI="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/1372/1743103301372-v",
                                                            "alt": "Jaadu Teri Nazar"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1271386699",
                                                                        "page_slug": "/in/shows/jaadu-teri-nazar/1271386699"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Jaadu Teri Nazar",
                                                                        "page_url": "/in/shows/jaadu-teri-nazar/1271386699",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/1135/1743103281135-h",
                                                                            "alt": "Jaadu Teri Nazar"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESbWJnCgoxMjcxMzg2Njk5EhBKYWFkdSBUZXJpIE5hemFyGhBKYWFkdSBUZXJpIE5hemFyIgRTSE9XKgdGYW50YXN5MMukn94EQghTdGFyUGx1c2IGR290aGljagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/6268/1743103346268-i",
                                                                "alt": "Jaadu Teri Nazar"
                                                            },
                                                            "content_info": {
                                                                "title": "Jaadu Teri Nazar",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/2828/1743103322828-t",
                                                                    "alt": "Jaadu Teri Nazar"
                                                                },
                                                                "description": "He is a Daavansh who holds keys to Daayan’s immortality! She’s Rewavanshi, the chosen one. Meant to be enemies, what happens when they fall in love?",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "StarPlus"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGvMBCgoxMjcxMzg2Njk5EhBKYWFkdSBUZXJpIE5hemFyGhBKYWFkdSBUZXJpIE5hemFyIgRTSE9XKgdGYW50YXN5MMukn94EQghTdGFyUGx1c2IGR290aGljagNoaW5yA2hpbpICfmltYWdlX3ZhcmlhbnQ9REVGQVVMVCxhcnR3b3JrX2xvZ2ljPWRlZmF1bHQsdGhlbWU9REVGQVVMVCxzY3JpcHRfbGFuZ3VhZ2U9dW5rbm93bixjYWxsb3V0X2xhbmd1YWdlcz11bmtub3duLHNjcmlwdFR5cGU9YXJ0d29ya+oCCFN0YXJQbHVzWgQIARABIlUKG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBIIdHJlbmRpbmcaG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldCADKgZzZWFyY2gyA2VuZzgCKAIyAggC"
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1271386699&fallbackEpisodeId=1700060496",
                                                                                    "page_slug": "/in/shows/jaadu-teri-nazar/1271386699/watch?fallbackEpisodeId=1700060496"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Jaadu Teri Nazar",
                                                                                    "page_url": "/in/shows/jaadu-teri-nazar/1271386699",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/1135/1743103281135-h",
                                                                                        "alt": "Jaadu Teri Nazar"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESbWJnCgoxMjcxMzg2Njk5EhBKYWFkdSBUZXJpIE5hemFyGhBKYWFkdSBUZXJpIE5hemFyIgRTSE9XKgdGYW50YXN5MMukn94EQghTdGFyUGx1c2IGR290aGljagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1271386699"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1271386699",
                                                                                    "page_slug": "/in/shows/jaadu-teri-nazar/1271386699"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Jaadu Teri Nazar,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExElFiSQoKMTI2MDE1NzI1MxIGSmhhbmFrGgZKaGFuYWsiBFNIT1cqBURyYW1hMMXy8dgEQghTdGFyUGx1c2oDaGlucgNoaW5aBAgBEAFqAggCcAMaVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAI="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/1666/1732286581666-v",
                                                            "alt": "Jhanak"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1260157253",
                                                                        "page_slug": "/in/shows/jhanak/1260157253"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Jhanak",
                                                                        "page_url": "/in/shows/jhanak/1260157253",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/7624/1732286547624-h",
                                                                            "alt": "Jhanak"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATEST2JJCgoxMjYwMTU3MjUzEgZKaGFuYWsaBkpoYW5hayIEU0hPVyoFRHJhbWEwxfLx2ARCCFN0YXJQbHVzagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/8949/1732286618949-i",
                                                                "alt": "Jhanak"
                                                            },
                                                            "content_info": {
                                                                "title": "Jhanak",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/8130/1732286598130-t",
                                                                    "alt": "Jhanak"
                                                                },
                                                                "description": "For Jhanak, dance is the breath of her life! But a tragedy pushes her into a whirlwind of crushed dreams, failures, and a marriage of convenience.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "StarPlus"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGtUBCgoxMjYwMTU3MjUzEgZKaGFuYWsaBkpoYW5hayIEU0hPVyoFRHJhbWEwxfLx2ARCCFN0YXJQbHVzagNoaW5yA2hpbpICfmltYWdlX3ZhcmlhbnQ9REVGQVVMVCxhcnR3b3JrX2xvZ2ljPWRlZmF1bHQsdGhlbWU9REVGQVVMVCxzY3JpcHRfbGFuZ3VhZ2U9dW5rbm93bixjYWxsb3V0X2xhbmd1YWdlcz11bmtub3duLHNjcmlwdFR5cGU9YXJ0d29ya+oCCFN0YXJQbHVzWgQIARABIlUKG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBIIdHJlbmRpbmcaG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldCADKgZzZWFyY2gyA2VuZzgCKAMyAggC"
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1260157253&fallbackEpisodeId=1000286160",
                                                                                    "page_slug": "/in/shows/jhanak/1260157253/watch?fallbackEpisodeId=1000286160"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Jhanak",
                                                                                    "page_url": "/in/shows/jhanak/1260157253",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/7624/1732286547624-h",
                                                                                        "alt": "Jhanak"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATEST2JJCgoxMjYwMTU3MjUzEgZKaGFuYWsaBkpoYW5hayIEU0hPVyoFRHJhbWEwxfLx2ARCCFN0YXJQbHVzagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1260157253"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1260157253",
                                                                                    "page_slug": "/in/shows/jhanak/1260157253"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Jhanak,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEqEBYpgBCgoxOTcxMDAzNTE3EiZMYXVnaHRlciBDaGVmcyBVbmxpbWl0ZWQgRW50ZXJ0YWlubWVudBomTGF1Z2h0ZXIgQ2hlZnMgVW5saW1pdGVkIEVudGVydGFpbm1lbnQiBFNIT1cqBkNvbWVkeTD9wOyrB0IMQ29sb3JzIEhpbmRpYghDdWxpbmFyeWoDaGlucgNoaW5aBAgBEAFqAggCcAQaVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAI="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/3714/1740560233714-v",
                                                            "alt": "Laughter Chefs Unlimited Entertainment"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1971003517",
                                                                        "page_slug": "/in/shows/laughter-chefs-unlimited-entertainment/1971003517"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Laughter Chefs Unlimited Entertainment",
                                                                        "page_url": "/in/shows/laughter-chefs-unlimited-entertainment/1971003517",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/9500/1740560199500-h",
                                                                            "alt": "Laughter Chefs Unlimited Entertainment"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESnwFimAEKCjE5NzEwMDM1MTcSJkxhdWdodGVyIENoZWZzIFVubGltaXRlZCBFbnRlcnRhaW5tZW50GiZMYXVnaHRlciBDaGVmcyBVbmxpbWl0ZWQgRW50ZXJ0YWlubWVudCIEU0hPVyoGQ29tZWR5MP3A7KsHQgxDb2xvcnMgSGluZGliCEN1bGluYXJ5agNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/5371/1740560295371-i",
                                                                "alt": "Laughter Chefs Unlimited Entertainment"
                                                            },
                                                            "content_info": {
                                                                "title": "Laughter Chefs Unlimited Entertainment",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/4865/1740560324865-t",
                                                                    "alt": "Laughter Chefs Unlimited Entertainment"
                                                                },
                                                                "description": "Culinary comedy returns! Six celebrity couples showcase their unique dynamics in a kitchen setting and compete for the top prize.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "Colors Hindi"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGqgCCgoxOTcxMDAzNTE3EiZMYXVnaHRlciBDaGVmcyBVbmxpbWl0ZWQgRW50ZXJ0YWlubWVudBomTGF1Z2h0ZXIgQ2hlZnMgVW5saW1pdGVkIEVudGVydGFpbm1lbnQiBFNIT1cqBkNvbWVkeTD9wOyrB0IMQ29sb3JzIEhpbmRpYghDdWxpbmFyeWoDaGlucgNoaW6SAn5pbWFnZV92YXJpYW50PURFRkFVTFQsYXJ0d29ya19sb2dpYz1kZWZhdWx0LHRoZW1lPURFRkFVTFQsc2NyaXB0X2xhbmd1YWdlPXVua25vd24sY2FsbG91dF9sYW5ndWFnZXM9dW5rbm93bixzY3JpcHRUeXBlPWFydHdvcmvqAgxDb2xvcnMgSGluZGlaBAgBEAEiVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAIoBDICCAI="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1971003517&fallbackEpisodeId=1971041754",
                                                                                    "page_slug": "/in/shows/laughter-chefs-unlimited-entertainment/1971003517/watch?fallbackEpisodeId=1971041754"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Laughter Chefs Unlimited Entertainment",
                                                                                    "page_url": "/in/shows/laughter-chefs-unlimited-entertainment/1971003517",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/9500/1740560199500-h",
                                                                                        "alt": "Laughter Chefs Unlimited Entertainment"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESnwFimAEKCjE5NzEwMDM1MTcSJkxhdWdodGVyIENoZWZzIFVubGltaXRlZCBFbnRlcnRhaW5tZW50GiZMYXVnaHRlciBDaGVmcyBVbmxpbWl0ZWQgRW50ZXJ0YWlubWVudCIEU0hPVyoGQ29tZWR5MP3A7KsHQgxDb2xvcnMgSGluZGliCEN1bGluYXJ5agNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1971003517"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1971003517",
                                                                                    "page_slug": "/in/shows/laughter-chefs-unlimited-entertainment/1971003517"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Laughter Chefs Unlimited Entertainment,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEn5idgoKMTk3MTMxMTk5MxIaTWFubmF0IEhhciBraHVzaGkgcGFhbmUga2kaGk1hbm5hdCBIYXIga2h1c2hpIHBhYW5lIGtpIgRTSE9XKgZGYW1pbHkw+ar/qwdCDENvbG9ycyBIaW5kaWoDaGlucgNoaW5aBAgBEAFqAggCcAUaVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAI="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/471/1738316010471-v",
                                                            "alt": "Mannat Har khushi paane ki"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1971311993",
                                                                        "page_slug": "/in/shows/mannat-har-khushi-paane-ki/1971311993"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Mannat Har khushi paane ki",
                                                                        "page_url": "/in/shows/mannat-har-khushi-paane-ki/1971311993",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/2877/1738315992877-h",
                                                                            "alt": "Mannat Har khushi paane ki"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESfGJ2CgoxOTcxMzExOTkzEhpNYW5uYXQgSGFyIGtodXNoaSBwYWFuZSBraRoaTWFubmF0IEhhciBraHVzaGkgcGFhbmUga2kiBFNIT1cqBkZhbWlseTD5qv+rB0IMQ29sb3JzIEhpbmRpagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/8384/1738315988384-i",
                                                                "alt": "Mannat Har khushi paane ki"
                                                            },
                                                            "content_info": {
                                                                "title": "Mannat Har khushi paane ki",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/4560/1738316004560-t",
                                                                    "alt": "Mannat Har khushi paane ki"
                                                                },
                                                                "description": "Abandoned and gifted, Mannat becomes a chef, unaware her boss is her mother. Secrets and betrayal test her strength. Will she find her destiny?",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "Colors Hindi"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGoYCCgoxOTcxMzExOTkzEhpNYW5uYXQgSGFyIGtodXNoaSBwYWFuZSBraRoaTWFubmF0IEhhciBraHVzaGkgcGFhbmUga2kiBFNIT1cqBkZhbWlseTD5qv+rB0IMQ29sb3JzIEhpbmRpagNoaW5yA2hpbpICfmltYWdlX3ZhcmlhbnQ9REVGQVVMVCxhcnR3b3JrX2xvZ2ljPWRlZmF1bHQsdGhlbWU9REVGQVVMVCxzY3JpcHRfbGFuZ3VhZ2U9dW5rbm93bixjYWxsb3V0X2xhbmd1YWdlcz11bmtub3duLHNjcmlwdFR5cGU9YXJ0d29ya+oCDENvbG9ycyBIaW5kaVoECAEQASJVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AigFMgIIAg=="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1971311993&fallbackEpisodeId=1971312678",
                                                                                    "page_slug": "/in/shows/mannat-har-khushi-paane-ki/1971311993/watch?fallbackEpisodeId=1971312678"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Mannat Har khushi paane ki",
                                                                                    "page_url": "/in/shows/mannat-har-khushi-paane-ki/1971311993",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/2877/1738315992877-h",
                                                                                        "alt": "Mannat Har khushi paane ki"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESfGJ2CgoxOTcxMzExOTkzEhpNYW5uYXQgSGFyIGtodXNoaSBwYWFuZSBraRoaTWFubmF0IEhhciBraHVzaGkgcGFhbmUga2kiBFNIT1cqBkZhbWlseTD5qv+rB0IMQ29sb3JzIEhpbmRpagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1971311993"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1971311993",
                                                                                    "page_slug": "/in/shows/mannat-har-khushi-paane-ki/1971311993"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Mannat Har khushi paane ki,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEmdiXwoKMTI2MDA0MzE3ORIQR2h1bSBIYWkgS2lzaWtleRoQR2h1bSBIYWkgS2lzaWtleSIEU0hPVyoHUm9tYW5jZTCr9+rYBEIIU3RhclBsdXNqA2hpbnIDaGluWgQIARABagIIAnAGGlUKG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBIIdHJlbmRpbmcaG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldCADKgZzZWFyY2gyA2VuZzgC"
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/2077/1738196502077-v",
                                                            "alt": "Ghum Hai Kisikey"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1260043179",
                                                                        "page_slug": "/in/shows/ghum-hai-kisikey/1260043179"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Ghum Hai Kisikey",
                                                                        "page_url": "/in/shows/ghum-hai-kisikey/1260043179",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/2105/1738196472105-h",
                                                                            "alt": "Ghum Hai Kisikey"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESZWJfCgoxMjYwMDQzMTc5EhBHaHVtIEhhaSBLaXNpa2V5GhBHaHVtIEhhaSBLaXNpa2V5IgRTSE9XKgdSb21hbmNlMKv36tgEQghTdGFyUGx1c2oDaGlucgNoaW5aBAgBEAFqAggBGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/2150/1738196552150-i",
                                                                "alt": "Ghum Hai Kisikey"
                                                            },
                                                            "content_info": {
                                                                "title": "Ghum Hai Kisikey",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/2147/1738196532147-t",
                                                                    "alt": "Ghum Hai Kisikey"
                                                                },
                                                                "description": "Tejaswini’s dreamy love story gets a not-so-happy ending. Reluctantly, she embraces her arranged marriage to Neil, but chaos follows as the old flame re-enters.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "StarPlus"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGusBCgoxMjYwMDQzMTc5EhBHaHVtIEhhaSBLaXNpa2V5GhBHaHVtIEhhaSBLaXNpa2V5IgRTSE9XKgdSb21hbmNlMKv36tgEQghTdGFyUGx1c2oDaGlucgNoaW6SAn5pbWFnZV92YXJpYW50PURFRkFVTFQsYXJ0d29ya19sb2dpYz1kZWZhdWx0LHRoZW1lPURFRkFVTFQsc2NyaXB0X2xhbmd1YWdlPXVua25vd24sY2FsbG91dF9sYW5ndWFnZXM9dW5rbm93bixzY3JpcHRUeXBlPWFydHdvcmvqAghTdGFyUGx1c1oECAEQASJVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AigGMgIIAg=="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1260043179&fallbackEpisodeId=1000253056",
                                                                                    "page_slug": "/in/shows/ghum-hai-kisikey/1260043179/watch?fallbackEpisodeId=1000253056"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Ghum Hai Kisikey",
                                                                                    "page_url": "/in/shows/ghum-hai-kisikey/1260043179",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/2105/1738196472105-h",
                                                                                        "alt": "Ghum Hai Kisikey"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESZWJfCgoxMjYwMDQzMTc5EhBHaHVtIEhhaSBLaXNpa2V5GhBHaHVtIEhhaSBLaXNpa2V5IgRTSE9XKgdSb21hbmNlMKv36tgEQghTdGFyUGx1c2oDaGlucgNoaW5aBAgBEAFqAggBGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1260043179"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1260043179",
                                                                                    "page_slug": "/in/shows/ghum-hai-kisikey/1260043179"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Ghum Hai Kisikey,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExElNiSwoKMTI2MDAyMjAxNxIHQW51cGFtYRoHQW51cGFtYSIEU0hPVyoFRHJhbWEwgdLp2ARCCFN0YXJQbHVzagNoaW5yA2hpbloECAEQAWoCCAJwBxpVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4Ag=="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/8425/1735201218425-v",
                                                            "alt": "Anupama"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1260022017",
                                                                        "page_slug": "/in/shows/anupama/1260022017"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Anupama",
                                                                        "page_url": "/in/shows/anupama/1260022017",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/9664/1735201199664-h",
                                                                            "alt": "Anupama"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESUWJLCgoxMjYwMDIyMDE3EgdBbnVwYW1hGgdBbnVwYW1hIgRTSE9XKgVEcmFtYTCB0unYBEIIU3RhclBsdXNqA2hpbnIDaGluWgQIARABagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/9716/1735201259716-i",
                                                                "alt": "Anupama"
                                                            },
                                                            "content_info": {
                                                                "title": "Anupama",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/1309/1735201241309-t",
                                                                    "alt": "Anupama"
                                                                },
                                                                "description": "From unfulfilled dreams to changing relationships, Anupama has seen it all! As the family’s guiding light, can she deal with the drama of the new generation?",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "StarPlus"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGtcBCgoxMjYwMDIyMDE3EgdBbnVwYW1hGgdBbnVwYW1hIgRTSE9XKgVEcmFtYTCB0unYBEIIU3RhclBsdXNqA2hpbnIDaGlukgJ+aW1hZ2VfdmFyaWFudD1ERUZBVUxULGFydHdvcmtfbG9naWM9ZGVmYXVsdCx0aGVtZT1ERUZBVUxULHNjcmlwdF9sYW5ndWFnZT11bmtub3duLGNhbGxvdXRfbGFuZ3VhZ2VzPXVua25vd24sc2NyaXB0VHlwZT1hcnR3b3Jr6gIIU3RhclBsdXNaBAgBEAEiVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAIoBzICCAI="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1260022017&fallbackEpisodeId=1000250178",
                                                                                    "page_slug": "/in/shows/anupama/1260022017/watch?fallbackEpisodeId=1000250178"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Anupama",
                                                                                    "page_url": "/in/shows/anupama/1260022017",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/9664/1735201199664-h",
                                                                                        "alt": "Anupama"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESUWJLCgoxMjYwMDIyMDE3EgdBbnVwYW1hGgdBbnVwYW1hIgRTSE9XKgVEcmFtYTCB0unYBEIIU3RhclBsdXNqA2hpbnIDaGluWgQIARABagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1260022017"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1260022017",
                                                                                    "page_slug": "/in/shows/anupama/1260022017"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Anupama,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExElhiUAoDNTg2EgpZZWggUmlzaHRhGgpZZWggUmlzaHRhIgRTSE9XKgVEcmFtYTDKBEIIU3RhclBsdXNiB0RyYW1lZHlqA2hpbnIDaGluWgQIARABagIIAnAIGlUKG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBIIdHJlbmRpbmcaG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldCADKgZzZWFyY2gyA2VuZzgC"
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/8211/1730828908211-v",
                                                            "alt": "Yeh Rishta"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=586",
                                                                        "page_slug": "/in/shows/yeh-rishta/586"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Yeh Rishta",
                                                                        "page_url": "/in/shows/yeh-rishta/586",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/7952/1730828857952-h",
                                                                            "alt": "Yeh Rishta"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESVmJQCgM1ODYSClllaCBSaXNodGEaClllaCBSaXNodGEiBFNIT1cqBURyYW1hMMoEQghTdGFyUGx1c2IHRHJhbWVkeWoDaGlucgNoaW5aBAgBEAFqAggBGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/2511/1730829042511-i",
                                                                "alt": "Yeh Rishta"
                                                            },
                                                            "content_info": {
                                                                "title": "Yeh Rishta",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/5657/1730829025657-t",
                                                                    "alt": "Yeh Rishta"
                                                                },
                                                                "description": "Following in her mother’s footsteps, Abhira aspires to be a lawyer. And for Ruhi, love equals everything! What happens when their lives intertwine with Armaan?",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "StarPlus"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGtwBCgM1ODYSClllaCBSaXNodGEaClllaCBSaXNodGEiBFNIT1cqBURyYW1hMMoEQghTdGFyUGx1c2IHRHJhbWVkeWoDaGlucgNoaW6SAn5pbWFnZV92YXJpYW50PURFRkFVTFQsYXJ0d29ya19sb2dpYz1kZWZhdWx0LHRoZW1lPURFRkFVTFQsc2NyaXB0X2xhbmd1YWdlPXVua25vd24sY2FsbG91dF9sYW5ndWFnZXM9dW5rbm93bixzY3JpcHRUeXBlPWFydHdvcmvqAghTdGFyUGx1c1oECAEQASJVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AigIMgIIAg=="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=586&fallbackEpisodeId=1000012211",
                                                                                    "page_slug": "/in/shows/yeh-rishta/586/watch?fallbackEpisodeId=1000012211"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Yeh Rishta",
                                                                                    "page_url": "/in/shows/yeh-rishta/586",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/7952/1730828857952-h",
                                                                                        "alt": "Yeh Rishta"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESVmJQCgM1ODYSClllaCBSaXNodGEaClllaCBSaXNodGEiBFNIT1cqBURyYW1hMMoEQghTdGFyUGx1c2IHRHJhbWVkeWoDaGlucgNoaW5aBAgBEAFqAggBGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "586"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=586",
                                                                                    "page_slug": "/in/shows/yeh-rishta/586"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Yeh Rishta,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEqcBYp4BCgoxMjYwMDUyMTA5EhVUaGUgTGVnZW5kIG9mIEhhbnVtYW4aFVRoZSBMZWdlbmQgb2YgSGFudW1hbiIEU0hPVyoJTXl0aG9sb2d5MI2969gEQhBIb3RzdGFyIFNwZWNpYWxzSAFiCUFkdmVudHVyZWoDaGluagNtYXJqA2JlbmoDdGVsagN0YW1qA21hbGoDa2FucgNoaW5aBBABGAFqAggCcAkaVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAI="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/5170/1744307135170-v",
                                                            "alt": "The Legend of Hanuman"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1260052109",
                                                                        "page_slug": "/in/shows/the-legend-of-hanuman/1260052109"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "The Legend of Hanuman",
                                                                        "page_url": "/in/shows/the-legend-of-hanuman/1260052109",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/666/1744307100666-h",
                                                                            "alt": "The Legend of Hanuman"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESpQFingEKCjEyNjAwNTIxMDkSFVRoZSBMZWdlbmQgb2YgSGFudW1hbhoVVGhlIExlZ2VuZCBvZiBIYW51bWFuIgRTSE9XKglNeXRob2xvZ3kwjb3r2ARCEEhvdHN0YXIgU3BlY2lhbHNIAWIJQWR2ZW50dXJlagNoaW5qA21hcmoDYmVuagN0ZWxqA3RhbWoDbWFsagNrYW5yA2hpbloEEAEYAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/6442/1744307176442-i",
                                                                "alt": "The Legend of Hanuman"
                                                            },
                                                            "content_info": {
                                                                "title": "The Legend of Hanuman",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/5634/1744307155634-t",
                                                                    "alt": "The Legend of Hanuman"
                                                                },
                                                                "description": "Back from Patal Loka, Hanuman faces his toughest challenge and embarks on a miraculous journey when Ravan unleashes his deadliest blow.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "6 Seasons"
                                                                    },
                                                                    {
                                                                        "value": "Hotstar Specials"
                                                                    },
                                                                    {
                                                                        "value": "7 Languages"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    },
                                                                    {
                                                                        "key": "mar",
                                                                        "value": "मराठी"
                                                                    },
                                                                    {
                                                                        "key": "ben",
                                                                        "value": "বাংলা"
                                                                    },
                                                                    {
                                                                        "key": "tel",
                                                                        "value": "తెలుగు"
                                                                    },
                                                                    {
                                                                        "key": "tam",
                                                                        "value": "தமிழ்"
                                                                    },
                                                                    {
                                                                        "key": "mal",
                                                                        "value": "മലയാളം"
                                                                    },
                                                                    {
                                                                        "key": "kan",
                                                                        "value": "ಕನ್ನಡ"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGvICCgoxMjYwMDUyMTA5EhVUaGUgTGVnZW5kIG9mIEhhbnVtYW4aFVRoZSBMZWdlbmQgb2YgSGFudW1hbiIEU0hPVyoJTXl0aG9sb2d5MI2969gEQhBIb3RzdGFyIFNwZWNpYWxzSAFiCUFkdmVudHVyZWoDaGluagNtYXJqA2JlbmoDdGVsagN0YW1qA21hbGoDa2FucgNoaW7qATUKCk5ldyBTZWFzb24SBkNVU1RPTRoVTG9jYWxpc2FibGVUZXh0T2JqZWN0IghNZXRhTGlzdJICfmltYWdlX3ZhcmlhbnQ9REVGQVVMVCxhcnR3b3JrX2xvZ2ljPWRlZmF1bHQsdGhlbWU9REVGQVVMVCxzY3JpcHRfbGFuZ3VhZ2U9dW5rbm93bixjYWxsb3V0X2xhbmd1YWdlcz11bmtub3duLHNjcmlwdFR5cGU9YXJ0d29ya+oCGEdyYXBoaWMgSW5kaWEgTWVkaWEgSW5jLloEEAEYASJVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AigJMgIIAg=="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1260052109&fallbackEpisodeId=1260052204",
                                                                                    "page_slug": "/in/shows/the-legend-of-hanuman/1260052109/watch?fallbackEpisodeId=1260052204"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "The Legend of Hanuman",
                                                                                    "page_url": "/in/shows/the-legend-of-hanuman/1260052109",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/666/1744307100666-h",
                                                                                        "alt": "The Legend of Hanuman"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESpQFingEKCjEyNjAwNTIxMDkSFVRoZSBMZWdlbmQgb2YgSGFudW1hbhoVVGhlIExlZ2VuZCBvZiBIYW51bWFuIgRTSE9XKglNeXRob2xvZ3kwjb3r2ARCEEhvdHN0YXIgU3BlY2lhbHNIAWIJQWR2ZW50dXJlagNoaW5qA21hcmoDYmVuagN0ZWxqA3RhbWoDbWFsagNrYW5yA2hpbloEEAEYAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1260052109"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1260052109",
                                                                                    "page_slug": "/in/shows/the-legend-of-hanuman/1260052109"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "The Legend of Hanuman,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEl1iVQoKMTk3MTAwMjY4NxIKUGFyaW5lZXRpaRoKUGFyaW5lZXRpaSIEU0hPVyoFRHJhbWEwv7rsqwdCDENvbG9ycyBIaW5kaWoDaGlucgNoaW5aBAgBEAFqAggCcAoaVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAI="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/7533/1734426737533-v",
                                                            "alt": "Parineetii"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1971002687",
                                                                        "page_slug": "/in/shows/parineetii/1971002687"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Parineetii",
                                                                        "page_url": "/in/shows/parineetii/1971002687",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/8760/1734426718760-h",
                                                                            "alt": "Parineetii"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESW2JVCgoxOTcxMDAyNjg3EgpQYXJpbmVldGlpGgpQYXJpbmVldGlpIgRTSE9XKgVEcmFtYTC/uuyrB0IMQ29sb3JzIEhpbmRpagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/3081/1734426713081-i",
                                                                "alt": "Parineetii"
                                                            },
                                                            "content_info": {
                                                                "title": "Parineetii",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/1123/1734426731123-t",
                                                                    "alt": "Parineetii"
                                                                },
                                                                "description": "Fate brings together two best friends to marry the same man, leading to a complicated love triangle.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "Colors Hindi"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGuUBCgoxOTcxMDAyNjg3EgpQYXJpbmVldGlpGgpQYXJpbmVldGlpIgRTSE9XKgVEcmFtYTC/uuyrB0IMQ29sb3JzIEhpbmRpagNoaW5yA2hpbpICfmltYWdlX3ZhcmlhbnQ9REVGQVVMVCxhcnR3b3JrX2xvZ2ljPWRlZmF1bHQsdGhlbWU9REVGQVVMVCxzY3JpcHRfbGFuZ3VhZ2U9dW5rbm93bixjYWxsb3V0X2xhbmd1YWdlcz11bmtub3duLHNjcmlwdFR5cGU9YXJ0d29ya+oCDENvbG9ycyBIaW5kaVoECAEQASJVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AigKMgIIAg=="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1971002687&fallbackEpisodeId=1971064253",
                                                                                    "page_slug": "/in/shows/parineetii/1971002687/watch?fallbackEpisodeId=1971064253"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Parineetii",
                                                                                    "page_url": "/in/shows/parineetii/1971002687",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/8760/1734426718760-h",
                                                                                        "alt": "Parineetii"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESW2JVCgoxOTcxMDAyNjg3EgpQYXJpbmVldGlpGgpQYXJpbmVldGlpIgRTSE9XKgVEcmFtYTC/uuyrB0IMQ29sb3JzIEhpbmRpagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1971002687"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1971002687",
                                                                                    "page_slug": "/in/shows/parineetii/1971002687"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Parineetii,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExElRiTAoKMTk3MTAwMzQwNBIFRG9yZWUaBURvcmVlIgRTSE9XKgZGYW1pbHkwjMDsqwdCDENvbG9ycyBIaW5kaWoDaGlucgNoaW5aBAgBEAFqAggCcAsaVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAI="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/9402/1742555449402-v",
                                                            "alt": "Doree"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1971003404",
                                                                        "page_slug": "/in/shows/doree/1971003404"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Doree",
                                                                        "page_url": "/in/shows/doree/1971003404",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/7502/1742555267502-h",
                                                                            "alt": "Doree"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESUmJMCgoxOTcxMDAzNDA0EgVEb3JlZRoFRG9yZWUiBFNIT1cqBkZhbWlseTCMwOyrB0IMQ29sb3JzIEhpbmRpagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/9571/1742555639571-i",
                                                                "alt": "Doree"
                                                            },
                                                            "content_info": {
                                                                "title": "Doree",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/3059/1742555563059-t",
                                                                    "alt": "Doree"
                                                                },
                                                                "description": "From river rescue to design dreams, Doree's fight for justice begins.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "Colors Hindi"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGtwBCgoxOTcxMDAzNDA0EgVEb3JlZRoFRG9yZWUiBFNIT1cqBkZhbWlseTCMwOyrB0IMQ29sb3JzIEhpbmRpagNoaW5yA2hpbpICfmltYWdlX3ZhcmlhbnQ9REVGQVVMVCxhcnR3b3JrX2xvZ2ljPWRlZmF1bHQsdGhlbWU9REVGQVVMVCxzY3JpcHRfbGFuZ3VhZ2U9dW5rbm93bixjYWxsb3V0X2xhbmd1YWdlcz11bmtub3duLHNjcmlwdFR5cGU9YXJ0d29ya+oCDENvbG9ycyBIaW5kaVoECAEQASJVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AigLMgIIAg=="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1971003404&fallbackEpisodeId=1971039157",
                                                                                    "page_slug": "/in/shows/doree/1971003404/watch?fallbackEpisodeId=1971039157"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Doree",
                                                                                    "page_url": "/in/shows/doree/1971003404",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/7502/1742555267502-h",
                                                                                        "alt": "Doree"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESUmJMCgoxOTcxMDAzNDA0EgVEb3JlZRoFRG9yZWUiBFNIT1cqBkZhbWlseTCMwOyrB0IMQ29sb3JzIEhpbmRpagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1971003404"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1971003404",
                                                                                    "page_slug": "/in/shows/doree/1971003404"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Doree,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEoYBYn4KCjEyNzEzMzg2MjESFFRodWtyYSBLZSBNZXJhIFB5YWFyGhRUaHVrcmEgS2UgTWVyYSBQeWFhciIEU0hPVyoFRHJhbWEw/ayc3gRCEEhvdHN0YXIgU3BlY2lhbHNIAWoDaGluagN0ZWxqA21hcmoDdGFtcgNoaW5aBBACGAFqAggCcAwaVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAI="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/2994/1734579572994-v",
                                                            "alt": "Thukra Ke Mera Pyaar"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1271338621",
                                                                        "page_slug": "/in/shows/thukra-ke-mera-pyaar/1271338621"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Thukra Ke Mera Pyaar",
                                                                        "page_url": "/in/shows/thukra-ke-mera-pyaar/1271338621",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/6088/1734579566088-h",
                                                                            "alt": "Thukra Ke Mera Pyaar"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATEShAFifgoKMTI3MTMzODYyMRIUVGh1a3JhIEtlIE1lcmEgUHlhYXIaFFRodWtyYSBLZSBNZXJhIFB5YWFyIgRTSE9XKgVEcmFtYTD9rJzeBEIQSG90c3RhciBTcGVjaWFsc0gBagNoaW5qA3RlbGoDbWFyagN0YW1yA2hpbloEEAIYAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/3435/1734579953435-i",
                                                                "alt": "Thukra Ke Mera Pyaar"
                                                            },
                                                            "content_info": {
                                                                "title": "Thukra Ke Mera Pyaar",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/7763/1734579967763-t",
                                                                    "alt": "Thukra Ke Mera Pyaar"
                                                                },
                                                                "description": "Two families clash over societal and caste differences, spurring a saga of revenge. All this happens when a love story goes wrong.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2024"
                                                                    },
                                                                    {
                                                                        "value": "1 Season"
                                                                    },
                                                                    {
                                                                        "value": "Hotstar Specials"
                                                                    },
                                                                    {
                                                                        "value": "4 Languages"
                                                                    },
                                                                    {
                                                                        "value": "U/A 16+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    },
                                                                    {
                                                                        "key": "tel",
                                                                        "value": "తెలుగు"
                                                                    },
                                                                    {
                                                                        "key": "mar",
                                                                        "value": "मराठी"
                                                                    },
                                                                    {
                                                                        "key": "tam",
                                                                        "value": "தமிழ்"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGpwCCgoxMjcxMzM4NjIxEhRUaHVrcmEgS2UgTWVyYSBQeWFhchoUVGh1a3JhIEtlIE1lcmEgUHlhYXIiBFNIT1cqBURyYW1hMP2snN4EQhBIb3RzdGFyIFNwZWNpYWxzSAFqA2hpbmoDdGVsagNtYXJqA3RhbXIDaGlukgJ+aW1hZ2VfdmFyaWFudD1ERUZBVUxULGFydHdvcmtfbG9naWM9ZGVmYXVsdCx0aGVtZT1ERUZBVUxULHNjcmlwdF9sYW5ndWFnZT11bmtub3duLGNhbGxvdXRfbGFuZ3VhZ2VzPXVua25vd24sc2NyaXB0VHlwZT1hcnR3b3Jr6gIaU3RhciBJbmRpYSBQcml2YXRlIExpbWl0ZWRaBBACGAEiVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAIoDDICCAI="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1271338621&fallbackEpisodeId=1271340264",
                                                                                    "page_slug": "/in/shows/thukra-ke-mera-pyaar/1271338621/watch?fallbackEpisodeId=1271340264"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Thukra Ke Mera Pyaar",
                                                                                    "page_url": "/in/shows/thukra-ke-mera-pyaar/1271338621",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/6088/1734579566088-h",
                                                                                        "alt": "Thukra Ke Mera Pyaar"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATEShAFifgoKMTI3MTMzODYyMRIUVGh1a3JhIEtlIE1lcmEgUHlhYXIaFFRodWtyYSBLZSBNZXJhIFB5YWFyIgRTSE9XKgVEcmFtYTD9rJzeBEIQSG90c3RhciBTcGVjaWFsc0gBagNoaW5qA3RlbGoDbWFyagN0YW1yA2hpbloEEAIYAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1271338621"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1271338621",
                                                                                    "page_slug": "/in/shows/thukra-ke-mera-pyaar/1271338621"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Thukra Ke Mera Pyaar,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEmViXQoKMTk3MTAwMzMzOBIOTWFuZ2FsIExha3NobWkaDk1hbmdhbCBMYWtzaG1pIgRTSE9XKgVEcmFtYTDKv+yrB0IMQ29sb3JzIEhpbmRpagNoaW5yA2hpbloECAEQAWoCCAJwDRpVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4Ag=="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/4310/1734435614310-v",
                                                            "alt": "Mangal Lakshmi"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1971003338",
                                                                        "page_slug": "/in/shows/mangal-lakshmi/1971003338"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Mangal Lakshmi",
                                                                        "page_url": "/in/shows/mangal-lakshmi/1971003338",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/574/1734435610574-h",
                                                                            "alt": "Mangal Lakshmi"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESY2JdCgoxOTcxMDAzMzM4Eg5NYW5nYWwgTGFrc2htaRoOTWFuZ2FsIExha3NobWkiBFNIT1cqBURyYW1hMMq/7KsHQgxDb2xvcnMgSGluZGlqA2hpbnIDaGluWgQIARABagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/7522/1734435617522-i",
                                                                "alt": "Mangal Lakshmi"
                                                            },
                                                            "content_info": {
                                                                "title": "Mangal Lakshmi",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/5751/1734426765751-t",
                                                                    "alt": "Mangal Lakshmi"
                                                                },
                                                                "description": "Strong-willed Mangal embarks on a quest to find a perfect match for her sister Lakshmi. This journey tests the bond of their sisterhood.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "Colors Hindi"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGu0BCgoxOTcxMDAzMzM4Eg5NYW5nYWwgTGFrc2htaRoOTWFuZ2FsIExha3NobWkiBFNIT1cqBURyYW1hMMq/7KsHQgxDb2xvcnMgSGluZGlqA2hpbnIDaGlukgJ+aW1hZ2VfdmFyaWFudD1ERUZBVUxULGFydHdvcmtfbG9naWM9ZGVmYXVsdCx0aGVtZT1ERUZBVUxULHNjcmlwdF9sYW5ndWFnZT11bmtub3duLGNhbGxvdXRfbGFuZ3VhZ2VzPXVua25vd24sc2NyaXB0VHlwZT1hcnR3b3Jr6gIMQ29sb3JzIEhpbmRpWgQIARABIlUKG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBIIdHJlbmRpbmcaG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldCADKgZzZWFyY2gyA2VuZzgCKA0yAggC"
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1971003338&fallbackEpisodeId=1971075245",
                                                                                    "page_slug": "/in/shows/mangal-lakshmi/1971003338/watch?fallbackEpisodeId=1971075245"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Mangal Lakshmi",
                                                                                    "page_url": "/in/shows/mangal-lakshmi/1971003338",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/574/1734435610574-h",
                                                                                        "alt": "Mangal Lakshmi"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESY2JdCgoxOTcxMDAzMzM4Eg5NYW5nYWwgTGFrc2htaRoOTWFuZ2FsIExha3NobWkiBFNIT1cqBURyYW1hMMq/7KsHQgxDb2xvcnMgSGluZGlqA2hpbnIDaGluWgQIARABagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1971003338"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1971003338",
                                                                                    "page_slug": "/in/shows/mangal-lakshmi/1971003338"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Mangal Lakshmi,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExElNiSwoKMTI3MTQwNjA0MxIFTWFyY28aBU1hcmNvIgVNT1ZJRSoGQWN0aW9uMNu7oN4EOgZWaWFjb21iCE5lby1Ob2lyagNoaW5yA21hbGoCCAJwDhpVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4Ag=="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/4269/1744026164269-v",
                                                            "alt": "Marco"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1271406043",
                                                                        "page_slug": "/in/movies/marco/1271406043"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Marco",
                                                                        "page_url": "/in/movies/marco/1271406043",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/9843/1744026129843-h",
                                                                            "alt": "Marco"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESUWJLCgoxMjcxNDA2MDQzEgVNYXJjbxoFTWFyY28iBU1PVklFKgZBY3Rpb24w27ug3gQ6BlZpYWNvbWIITmVvLU5vaXJqA2hpbnIDbWFsagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/1705/1744026211705-i",
                                                                "alt": "Marco"
                                                            },
                                                            "content_info": {
                                                                "title": "Marco",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/4844/1744026234844-t",
                                                                    "alt": "Marco"
                                                                },
                                                                "description": "After his brother is brutally murdered, skilled martial artist Marco sinks into the bloody path of vengeance. In his vendetta, no wrongs will be forgiven!",
                                                                "tags": [
                                                                    {
                                                                        "value": "2024"
                                                                    },
                                                                    {
                                                                        "value": "2h 21m"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "A"
                                                                    },
                                                                    {
                                                                        "value": "Action"
                                                                    },
                                                                    {
                                                                        "value": "Thriller"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGpgCCgoxMjcxNDA2MDQzEgVNYXJjbxoFTWFyY28iBU1PVklFKgZBY3Rpb24w27ug3gQ6BlZpYWNvbWIITmVvLU5vaXJqA2hpbnIDbWFs6gE2CgtOZXdseSBBZGRlZBIGQ1VTVE9NGhVMb2NhbGlzYWJsZVRleHRPYmplY3QiCE1ldGFMaXN0kgJ+aW1hZ2VfdmFyaWFudD1ERUZBVUxULGFydHdvcmtfbG9naWM9ZGVmYXVsdCx0aGVtZT1ERUZBVUxULHNjcmlwdF9sYW5ndWFnZT11bmtub3duLGNhbGxvdXRfbGFuZ3VhZ2VzPXVua25vd24sc2NyaXB0VHlwZT1hcnR3b3Jr6gIQV2lkZSBBbmdsZSBNZWRpYSJVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AigOMgIIAg=="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?content_id=1271406043&filters=content_type%3Dmovie",
                                                                                    "page_slug": "/in/movies/marco/1271406043/watch"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Marco",
                                                                                    "page_url": "/in/movies/marco/1271406043",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/9843/1744026129843-h",
                                                                                        "alt": "Marco"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESUWJLCgoxMjcxNDA2MDQzEgVNYXJjbxoFTWFyY28iBU1PVklFKgZBY3Rpb24w27ug3gQ6BlZpYWNvbWIITmVvLU5vaXJqA2hpbnIDbWFsagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1271406043"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1271406043",
                                                                                    "page_slug": "/in/movies/marco/1271406043"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Marco,Movie"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEmtiYwoKMTI2MDAyMTAwNBIIRG9yYWVtb24aCERvcmFlbW9uIgRTSE9XKgRLaWRzMIzK6dgEQgxTZWxlY3QgUGlja3NIAWIFQW5pbWVqA2hpbmoDdGVsagN0YW1yA2hpbloEEAEYAWoCCAJwDxpVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4Ag=="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/227/1715414310227-v",
                                                            "alt": "Doraemon"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1260021004",
                                                                        "page_slug": "/in/shows/doraemon/1260021004"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Doraemon",
                                                                        "page_url": "/in/shows/doraemon/1260021004",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/9400/1715414139400-h",
                                                                            "alt": "Doraemon"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESaWJjCgoxMjYwMDIxMDA0EghEb3JhZW1vbhoIRG9yYWVtb24iBFNIT1cqBEtpZHMwjMrp2ARCDFNlbGVjdCBQaWNrc0gBYgVBbmltZWoDaGluagN0ZWxqA3RhbXIDaGluWgQQARgBagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/7085/1715414277085-i",
                                                                "alt": "Doraemon"
                                                            },
                                                            "content_info": {
                                                                "title": "Doraemon",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/7018/1715414247018-t",
                                                                    "alt": "Doraemon"
                                                                },
                                                                "description": "Trouble continues to follow Nobita around. Fortunately, his trusty friend Doraemon, from the 22nd century, is always by his side for his adventures.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2024"
                                                                    },
                                                                    {
                                                                        "value": "4 Seasons"
                                                                    },
                                                                    {
                                                                        "value": "Select Picks"
                                                                    },
                                                                    {
                                                                        "value": "3 Languages"
                                                                    },
                                                                    {
                                                                        "value": "U/A 7+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    },
                                                                    {
                                                                        "key": "tel",
                                                                        "value": "తెలుగు"
                                                                    },
                                                                    {
                                                                        "key": "tam",
                                                                        "value": "தமிழ்"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGu8BCgoxMjYwMDIxMDA0EghEb3JhZW1vbhoIRG9yYWVtb24iBFNIT1cqBEtpZHMwjMrp2ARCDFNlbGVjdCBQaWNrc0gBYgVBbmltZWoDaGluagN0ZWxqA3RhbXIDaGlukgJ+aW1hZ2VfdmFyaWFudD1ERUZBVUxULGFydHdvcmtfbG9naWM9ZGVmYXVsdCx0aGVtZT1ERUZBVUxULHNjcmlwdF9sYW5ndWFnZT11bmtub3duLGNhbGxvdXRfbGFuZ3VhZ2VzPXVua25vd24sc2NyaXB0VHlwZT1hcnR3b3Jr6gIIVFYgQXNhaGlaBBABGAEiVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAIoDzICCAI="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1260021004&fallbackEpisodeId=1260021981",
                                                                                    "page_slug": "/in/shows/doraemon/1260021004/watch?fallbackEpisodeId=1260021981"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Doraemon",
                                                                                    "page_url": "/in/shows/doraemon/1260021004",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/9400/1715414139400-h",
                                                                                        "alt": "Doraemon"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESaWJjCgoxMjYwMDIxMDA0EghEb3JhZW1vbhoIRG9yYWVtb24iBFNIT1cqBEtpZHMwjMrp2ARCDFNlbGVjdCBQaWNrc0gBYgVBbmltZWoDaGluagN0ZWxqA3RhbXIDaGluWgQQARgBagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1260021004"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1260021004",
                                                                                    "page_slug": "/in/shows/doraemon/1260021004"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Doraemon,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEm9iZwoKMTk3MTMwNjM0MxIPUG93ZXIgb2YgUGFhbmNoGg9Qb3dlciBvZiBQYWFuY2giBFNIT1cqB0ZhbnRhc3kw5/7+qwdCEEhvdHN0YXIgU3BlY2lhbHNIAWoDaGlucgNoaW5aBBABGAFqAggCcBAaVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAI="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/7243/1737824927243-v",
                                                            "alt": "Power of Paanch"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1971306343",
                                                                        "page_slug": "/in/shows/power-of-paanch/1971306343"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Power of Paanch",
                                                                        "page_url": "/in/shows/power-of-paanch/1971306343",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/2324/1737824722324-h",
                                                                            "alt": "Power of Paanch"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESbWJnCgoxOTcxMzA2MzQzEg9Qb3dlciBvZiBQYWFuY2gaD1Bvd2VyIG9mIFBhYW5jaCIEU0hPVyoHRmFudGFzeTDn/v6rB0IQSG90c3RhciBTcGVjaWFsc0gBagNoaW5yA2hpbloEEAEYAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/990/1737825010990-i",
                                                                "alt": "Power of Paanch"
                                                            },
                                                            "content_info": {
                                                                "title": "Power of Paanch",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/8550/1737824938550-t",
                                                                    "alt": "Power of Paanch"
                                                                },
                                                                "description": "Bela's journey to Panchgiri unveils family secrets, mystical powers, and a battle against dark forces with friends who control wind, fire, water and earth.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "1 Season"
                                                                    },
                                                                    {
                                                                        "value": "Hotstar Specials"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "U/A 16+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGv8BCgoxOTcxMzA2MzQzEg9Qb3dlciBvZiBQYWFuY2gaD1Bvd2VyIG9mIFBhYW5jaCIEU0hPVyoHRmFudGFzeTDn/v6rB0IQSG90c3RhciBTcGVjaWFsc0gBagNoaW5yA2hpbpICfmltYWdlX3ZhcmlhbnQ9REVGQVVMVCxhcnR3b3JrX2xvZ2ljPWRlZmF1bHQsdGhlbWU9REVGQVVMVCxzY3JpcHRfbGFuZ3VhZ2U9dW5rbm93bixjYWxsb3V0X2xhbmd1YWdlcz11bmtub3duLHNjcmlwdFR5cGU9YXJ0d29ya+oCFEppbyBDaW5lbWEgT3JpZ2luYWxzWgQQARgBIlUKG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBIIdHJlbmRpbmcaG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldCADKgZzZWFyY2gyA2VuZzgCKBAyAggC"
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1971306343&fallbackEpisodeId=1971308542",
                                                                                    "page_slug": "/in/shows/power-of-paanch/1971306343/watch?fallbackEpisodeId=1971308542"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Power of Paanch",
                                                                                    "page_url": "/in/shows/power-of-paanch/1971306343",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/2324/1737824722324-h",
                                                                                        "alt": "Power of Paanch"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESbWJnCgoxOTcxMzA2MzQzEg9Qb3dlciBvZiBQYWFuY2gaD1Bvd2VyIG9mIFBhYW5jaCIEU0hPVyoHRmFudGFzeTDn/v6rB0IQSG90c3RhciBTcGVjaWFsc0gBagNoaW5yA2hpbloEEAEYAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1971306343"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1971306343",
                                                                                    "page_slug": "/in/shows/power-of-paanch/1971306343"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Power of Paanch,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEpEBYogBCgoxMjYwMTcwMzMxEhpTYWxhYXI6IFBhcnQgMSAtIENlYXNlZmlyZRoaU2FsYWFyOiBQYXJ0IDEgLSBDZWFzZWZpcmUiBU1PVklFKgZBY3Rpb24w29jy2AQ6EUhvbWJhbGUgRmlsbXMgTExQSAFiDlBvd2VyIFN0cnVnZ2xlagNoaW5yA3RlbGoCCAJwERpVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4Ag=="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/5893/1707996915893-v",
                                                            "alt": "Salaar: Part 1 - Ceasefire"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1260170331",
                                                                        "page_slug": "/in/movies/salaar-part-1-ceasefire/1260170331"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Salaar: Part 1 - Ceasefire",
                                                                        "page_url": "/in/movies/salaar-part-1-ceasefire/1260170331",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/4028/1707996874028-h",
                                                                            "alt": "Salaar: Part 1 - Ceasefire"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESjwFiiAEKCjEyNjAxNzAzMzESGlNhbGFhcjogUGFydCAxIC0gQ2Vhc2VmaXJlGhpTYWxhYXI6IFBhcnQgMSAtIENlYXNlZmlyZSIFTU9WSUUqBkFjdGlvbjDb2PLYBDoRSG9tYmFsZSBGaWxtcyBMTFBIAWIOUG93ZXIgU3RydWdnbGVqA2hpbnIDdGVsagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/8730/1707996958730-i",
                                                                "alt": "Salaar: Part 1 - Ceasefire"
                                                            },
                                                            "content_info": {
                                                                "title": "Salaar: Part 1 - Ceasefire",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/8973/1707996938973-t",
                                                                    "alt": "Salaar: Part 1 - Ceasefire"
                                                                },
                                                                "description": "In the crime-infested Khansaar, Prince Varadha sets to ascend the throne. But a coup d'état is planned! And there’s only one man to help reclaim power: Deva.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2023"
                                                                    },
                                                                    {
                                                                        "value": "2h 54m"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "A"
                                                                    },
                                                                    {
                                                                        "value": "Action"
                                                                    },
                                                                    {
                                                                        "value": "Thriller"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGtYCCgoxMjYwMTcwMzMxEhpTYWxhYXI6IFBhcnQgMSAtIENlYXNlZmlyZRoaU2FsYWFyOiBQYXJ0IDEgLSBDZWFzZWZpcmUiBU1PVklFKgZBY3Rpb24w29jy2AQ6EUhvbWJhbGUgRmlsbXMgTExQSAFiDlBvd2VyIFN0cnVnZ2xlagNoaW5yA3RlbOoBNgoLQmxvY2tidXN0ZXISBkNVU1RPTRoVTG9jYWxpc2FibGVUZXh0T2JqZWN0IghNZXRhTGlzdJICfmltYWdlX3ZhcmlhbnQ9REVGQVVMVCxhcnR3b3JrX2xvZ2ljPWRlZmF1bHQsdGhlbWU9REVGQVVMVCxzY3JpcHRfbGFuZ3VhZ2U9dW5rbm93bixjYWxsb3V0X2xhbmd1YWdlcz11bmtub3duLHNjcmlwdFR5cGU9YXJ0d29ya+oCEUhvbWJhbGUgRmlsbXMgTExQIlUKG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBIIdHJlbmRpbmcaG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldCADKgZzZWFyY2gyA2VuZzgCKBEyAggC"
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?content_id=1260170331&filters=content_type%3Dmovie",
                                                                                    "page_slug": "/in/movies/salaar-part-1-ceasefire/1260170331/watch"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Salaar: Part 1 - Ceasefire",
                                                                                    "page_url": "/in/movies/salaar-part-1-ceasefire/1260170331",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/4028/1707996874028-h",
                                                                                        "alt": "Salaar: Part 1 - Ceasefire"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESjwFiiAEKCjEyNjAxNzAzMzESGlNhbGFhcjogUGFydCAxIC0gQ2Vhc2VmaXJlGhpTYWxhYXI6IFBhcnQgMSAtIENlYXNlZmlyZSIFTU9WSUUqBkFjdGlvbjDb2PLYBDoRSG9tYmFsZSBGaWxtcyBMTFBIAWIOUG93ZXIgU3RydWdnbGVqA2hpbnIDdGVsagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1260170331"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1260170331",
                                                                                    "page_slug": "/in/movies/salaar-part-1-ceasefire/1260170331"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Salaar: Part 1 - Ceasefire,Movie"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEmliYQoKMTI3MTM4NzkxMxISUG9ja2V0IE1laW4gQWFzbWFuGhJQb2NrZXQgTWVpbiBBYXNtYW4iBFNIT1cqBURyYW1hMImun94EQghTdGFyUGx1c2oDaGlucgNoaW5aBAgBEAFqAggCcBIaVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAI="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/4875/1737613194875-v",
                                                            "alt": "Pocket Mein Aasman"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1271387913",
                                                                        "page_slug": "/in/shows/pocket-mein-aasman/1271387913"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Pocket Mein Aasman",
                                                                        "page_url": "/in/shows/pocket-mein-aasman/1271387913",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/7931/1737613177931-h",
                                                                            "alt": "Pocket Mein Aasman"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESZ2JhCgoxMjcxMzg3OTEzEhJQb2NrZXQgTWVpbiBBYXNtYW4aElBvY2tldCBNZWluIEFhc21hbiIEU0hPVyoFRHJhbWEwia6f3gRCCFN0YXJQbHVzagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/2972/1737613232972-i",
                                                                "alt": "Pocket Mein Aasman"
                                                            },
                                                            "content_info": {
                                                                "title": "Pocket Mein Aasman",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/7760/1737613267760-t",
                                                                    "alt": "Pocket Mein Aasman"
                                                                },
                                                                "description": "With her ‘never-give-up’ attitude intact, nothing can stop Rani from becoming a doctor. But an early marriage and pregnancy may cast a shadow on her dreams.",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "StarPlus"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGu0BCgoxMjcxMzg3OTEzEhJQb2NrZXQgTWVpbiBBYXNtYW4aElBvY2tldCBNZWluIEFhc21hbiIEU0hPVyoFRHJhbWEwia6f3gRCCFN0YXJQbHVzagNoaW5yA2hpbpICfmltYWdlX3ZhcmlhbnQ9REVGQVVMVCxhcnR3b3JrX2xvZ2ljPWRlZmF1bHQsdGhlbWU9REVGQVVMVCxzY3JpcHRfbGFuZ3VhZ2U9dW5rbm93bixjYWxsb3V0X2xhbmd1YWdlcz11bmtub3duLHNjcmlwdFR5cGU9YXJ0d29ya+oCCFN0YXJQbHVzWgQIARABIlUKG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBIIdHJlbmRpbmcaG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldCADKgZzZWFyY2gyA2VuZzgCKBIyAggC"
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1271387913&fallbackEpisodeId=1700058624",
                                                                                    "page_slug": "/in/shows/pocket-mein-aasman/1271387913/watch?fallbackEpisodeId=1700058624"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Pocket Mein Aasman",
                                                                                    "page_url": "/in/shows/pocket-mein-aasman/1271387913",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/7931/1737613177931-h",
                                                                                        "alt": "Pocket Mein Aasman"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESZ2JhCgoxMjcxMzg3OTEzEhJQb2NrZXQgTWVpbiBBYXNtYW4aElBvY2tldCBNZWluIEFhc21hbiIEU0hPVyoFRHJhbWEwia6f3gRCCFN0YXJQbHVzagNoaW5yA2hpbloECAEQAWoCCAEaRAoTU2VhcmNoSGlzdG9yeVdpZGdldBIHaGlzdG9yeRoTU2VhcmNoSGlzdG9yeVdpZGdldCADKgZzZWFyY2gyA2VuZzgB"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1271387913"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1271387913",
                                                                                    "page_slug": "/in/shows/pocket-mein-aasman/1271387913"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Pocket Mein Aasman,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEl5iVgoDNDM1EgpNYWhhYmhhcmF0GgpNYWhhYmhhcmF0IgRTSE9XKglNeXRob2xvZ3kwswNCCFN0YXJQbHVzYgdEcmFtZWR5agNoaW5yA2hpbloGCAEQAhgBagIIAnATGlUKG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBIIdHJlbmRpbmcaG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldCADKgZzZWFyY2gyA2VuZzgC"
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/7527/267527-v",
                                                            "alt": "Mahabharat"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=435",
                                                                        "page_slug": "/in/shows/mahabharat/435"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Mahabharat",
                                                                        "page_url": "/in/shows/mahabharat/435",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/7456/267456-h",
                                                                            "alt": "Mahabharat"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESXGJWCgM0MzUSCk1haGFiaGFyYXQaCk1haGFiaGFyYXQiBFNIT1cqCU15dGhvbG9neTCzA0IIU3RhclBsdXNiB0RyYW1lZHlqA2hpbnIDaGluWgYIARACGAFqAggBGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/3132/1383132-i-011cefc50da9",
                                                                "alt": "Mahabharat"
                                                            },
                                                            "content_info": {
                                                                "title": "Mahabharat",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/3134/1383134-t-aeff48613307",
                                                                    "alt": "Mahabharat"
                                                                },
                                                                "description": "The mother of all wars, the epitome of all rivalries, the cauldron of emotions, insecurities, jealousies, and power play - Mahabharat!",
                                                                "tags": [
                                                                    {
                                                                        "value": "2014"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "StarPlus"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGtcBCgM0MzUSCk1haGFiaGFyYXQaCk1haGFiaGFyYXQiBFNIT1cqCU15dGhvbG9neTCzA0IIU3RhclBsdXNiB0RyYW1lZHlqA2hpbnIDaGlukgJ+aW1hZ2VfdmFyaWFudD1ERUZBVUxULGFydHdvcmtfbG9naWM9ZGVmYXVsdCx0aGVtZT1ERUZBVUxULHNjcmlwdF9sYW5ndWFnZT11bmtub3duLGNhbGxvdXRfbGFuZ3VhZ2VzPXVua25vd24sc2NyaXB0VHlwZT1hcnR3b3JrWgYIARACGAEiVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAIoEzICCAI="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=435&fallbackEpisodeId=1000011769",
                                                                                    "page_slug": "/in/shows/mahabharat/435/watch?fallbackEpisodeId=1000011769"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Mahabharat",
                                                                                    "page_url": "/in/shows/mahabharat/435",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/7456/267456-h",
                                                                                        "alt": "Mahabharat"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESXGJWCgM0MzUSCk1haGFiaGFyYXQaCk1haGFiaGFyYXQiBFNIT1cqCU15dGhvbG9neTCzA0IIU3RhclBsdXNiB0RyYW1lZHlqA2hpbnIDaGluWgYIARACGAFqAggBGkQKE1NlYXJjaEhpc3RvcnlXaWRnZXQSB2hpc3RvcnkaE1NlYXJjaEhpc3RvcnlXaWRnZXQgAyoGc2VhcmNoMgNlbmc4AQ=="
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "435"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=435",
                                                                                    "page_slug": "/in/shows/mahabharat/435"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Mahabharat,Show"
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                "vertical_content_poster": {
                                                    "widget_commons": {
                                                        "version": "1",
                                                        "instrumentation": {
                                                            "override_referrer": true,
                                                            "impression_events": [
                                                                {
                                                                    "event_name": "Content Viewed"
                                                                }
                                                            ],
                                                            "instrumentation_context_v2": {
                                                                "url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEl9iVwoKMTI3MTI3MDQwOBINVWRuZSBLaSBBYXNoYRoNVWRuZSBLaSBBYXNoYSIEU0hPVyoFRHJhbWEwiJiY3gRCCFN0YXJQbHVzagNoaW5yA2hpbloECAEQAWoCCAJwFBpVChtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQSCHRyZW5kaW5nGhtWZXJ0aWNhbENvbnRlbnRQb3N0ZXJXaWRnZXQgAyoGc2VhcmNoMgNlbmc4Ag=="
                                                            }
                                                        },
                                                        "name": "VerticalContentPosterWidget"
                                                    },
                                                    "data": {
                                                        "image": {
                                                            "src": "sources/r1/cms/prod/8313/1742927648313-v",
                                                            "alt": "Udne Ki Aasha"
                                                        },
                                                        "actions": {
                                                            "on_click": [
                                                                {
                                                                    "hs_track": {
                                                                        "name": "Content Clicked"
                                                                    }
                                                                },
                                                                {
                                                                    "open_page_overlay": {
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "page_url": "/v2/pages/detail?content_id=1271270408",
                                                                        "page_slug": "/in/shows/udne-ki-aasha/1271270408"
                                                                    }
                                                                },
                                                                {
                                                                    "add_to_search_history": {
                                                                        "history_record_name": "Udne Ki Aasha",
                                                                        "page_url": "/in/shows/udne-ki-aasha/1271270408",
                                                                        "is_content": true,
                                                                        "image": {
                                                                            "src": "sources/r1/cms/prod/9792/1742927409792-h",
                                                                            "alt": "Udne Ki Aasha"
                                                                        },
                                                                        "page_type": "DesktopDetailsPage",
                                                                        "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                        "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESXWJXCgoxMjcxMjcwNDA4Eg1VZG5lIEtpIEFhc2hhGg1VZG5lIEtpIEFhc2hhIgRTSE9XKgVEcmFtYTCImJjeBEIIU3RhclBsdXNqA2hpbnIDaGluWgQIARABagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "expanded_content_poster": {
                                                            "image": {
                                                                "src": "sources/r1/cms/prod/3155/1742927683155-i",
                                                                "alt": "Udne Ki Aasha"
                                                            },
                                                            "content_info": {
                                                                "title": "Udne Ki Aasha",
                                                                "title_cutout": {
                                                                    "src": "sources/r1/cms/prod/7769/1742927667769-t",
                                                                    "alt": "Udne Ki Aasha"
                                                                },
                                                                "description": "A dreamy-eyed Sayali yearns for her prince charming. But when destiny ties her with hero-cum-thug Sachin, will her hopes for a fairytale life prevail?",
                                                                "tags": [
                                                                    {
                                                                        "value": "2025"
                                                                    },
                                                                    {
                                                                        "value": "Hindi"
                                                                    },
                                                                    {
                                                                        "value": "StarPlus"
                                                                    },
                                                                    {
                                                                        "value": "U/A 13+"
                                                                    }
                                                                ],
                                                                "languages": [
                                                                    {
                                                                        "key": "hin",
                                                                        "value": "हिंदी"
                                                                    }
                                                                ],
                                                                "primary_cta": {
                                                                    "icon_name": "icon-play-fill",
                                                                    "label": "Watch Now",
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Content Clicked"
                                                                                }
                                                                            },
                                                                            {
                                                                                "hs_track": {
                                                                                    "name": "Clicked Watch CTA",
                                                                                    "override_context": {
                                                                                        "url": "type.googleapis.com/server.context.widget.ContentCTAContext",
                                                                                        "value": "CjQSG1ZlcnRpY2FsQ29udGVudFBvc3RlcldpZGdldBoSRXhwbG9yZS9HcmlkV2lkZ2V0IgExEg0KCVdhdGNoIE5vdxABGuMBCgoxMjcxMjcwNDA4Eg1VZG5lIEtpIEFhc2hhGg1VZG5lIEtpIEFhc2hhIgRTSE9XKgVEcmFtYTCImJjeBEIIU3RhclBsdXNqA2hpbnIDaGlukgJ+aW1hZ2VfdmFyaWFudD1ERUZBVUxULGFydHdvcmtfbG9naWM9ZGVmYXVsdCx0aGVtZT1ERUZBVUxULHNjcmlwdF9sYW5ndWFnZT11bmtub3duLGNhbGxvdXRfbGFuZ3VhZ2VzPXVua25vd24sc2NyaXB0VHlwZT1hcnR3b3Jr6gIIU3RhclBsdXNaBAgBEAEiVQobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0Egh0cmVuZGluZxobVmVydGljYWxDb250ZW50UG9zdGVyV2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAIoFDICCAI="
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "page_navigation": {
                                                                                    "page_type": "WatchPage",
                                                                                    "page_url": "/v2/pages/watch?action=ctaNavigation&content_id=1271270408&fallbackEpisodeId=1000287864",
                                                                                    "page_slug": "/in/shows/udne-ki-aasha/1271270408/watch?fallbackEpisodeId=1000287864"
                                                                                }
                                                                            },
                                                                            {
                                                                                "add_to_search_history": {
                                                                                    "history_record_name": "Udne Ki Aasha",
                                                                                    "page_url": "/in/shows/udne-ki-aasha/1271270408",
                                                                                    "is_content": true,
                                                                                    "image": {
                                                                                        "src": "sources/r1/cms/prod/9792/1742927409792-h",
                                                                                        "alt": "Udne Ki Aasha"
                                                                                    },
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "instrumentation_url": "type.googleapis.com/server.context.widget.SearchContentItemContext",
                                                                                    "instrumentation_value": "Ci0SE1NlYXJjaEhpc3RvcnlXaWRnZXQaE1NlYXJjaEhpc3RvcnlXaWRnZXQiATESXWJXCgoxMjcxMjcwNDA4Eg1VZG5lIEtpIEFhc2hhGg1VZG5lIEtpIEFhc2hhIgRTSE9XKgVEcmFtYTCImJjeBEIIU3RhclBsdXNqA2hpbnIDaGluWgQIARABagIIARpEChNTZWFyY2hIaXN0b3J5V2lkZ2V0EgdoaXN0b3J5GhNTZWFyY2hIaXN0b3J5V2lkZ2V0IAMqBnNlYXJjaDIDZW5nOAE="
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                "watchlist_cta": {
                                                                    "info": {
                                                                        "content_id": "1271270408"
                                                                    }
                                                                },
                                                                "see_more_cta": {
                                                                    "actions": {
                                                                        "on_click": [
                                                                            {
                                                                                "open_page_overlay": {
                                                                                    "page_type": "DesktopDetailsPage",
                                                                                    "page_url": "/v2/pages/detail?content_id=1271270408",
                                                                                    "page_slug": "/in/shows/udne-ki-aasha/1271270408"
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "alt": {
                                                            "label": "Udne Ki Aasha,Show"
                                                        }
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                "id": "71",
                                "defer_id": "71",
                                "unique_identifier": "265"
                            }
                        ]
                    },
                    "seo": {
                        "id": "seo",
                        "template": "SEOSpace"
                    }
                },
                "data": {
                    "@type": "type.googleapis.com/pagedata.ExplorePageData",
                    "page_data_commons": {
                        "instrumentation": {
                            "override_referrer": true,
                            "instrumentation_context_v2": {
                                "url": "type.googleapis.com/server.context.page.SearchPage",
                                "value": "CkAKB2V4cGxvcmUSC0V4cGxvcmVQYWdlGgkvdjIvc3RhcnQgCyoLRXhwbG9yZVBhZ2UyATE6C0V4cGxvcmVQYWdlEgwIAjIGc2VhcmNoOAI="
                            }
                        },
                        "url": "/in/explore"
                    },
                    "placeholder": "Movies, shows and more",
                    "experiment": {
                        "show_legacy_history_in_zero": true,
                        "is_dynamic_hint_clickable": true
                    }
                }
            },
            "is_deeplink_resolved": true
        }
    }
]